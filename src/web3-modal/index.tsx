import Web3Modal from '@actool/web3modal';
import Web3 from 'web3';
import { useEffect, useState, useCallback } from 'react';
import { CHAIN_IDS_MAPPING } from './constant';

const providerOptions = () => ({
  binancewallet: {
    package: (window as any).BinanceChain,
  },
  metamask: {
    package: (window as any).ethereum,
  },
});

const getWeb3Modal = () => {
  const web3modal = new Web3Modal({
    providerOptions: providerOptions(),
    cacheProvider: true,
  });
  return web3modal;
};

export const ConnectButtons = () => {
  const [web3modal, setWeb3modal] = useState({} as Web3Modal);
  const [result, setResult] = useState({});
  const [web3, setWeb3] = useState({} as Web3);
  const [network, setNetwork] = useState({});
  const [account, setAccount] = useState('');

  useEffect(() => {
    setWeb3modal(getWeb3Modal());
  }, []);

  // auto connect.
  useEffect(() => {
    if (web3modal.cachedProvider) {
      handleConnect();
    }
  }, [web3modal]);

  const handleConnect = useCallback(async () => {
    const provider = await web3modal.connect();
    const _web3 = new Web3(provider);

    // get chainId
    // const chainId = await _web3.eth.getChainId();
    const chainId = await provider.request({ method: 'eth_chainId' });
    const setChainId = (_chainId: number) => {
      const hex = _web3.utils.toHex(_chainId || 'unknown');
      setNetwork({
        chainId: _chainId,
        hex,
        name: CHAIN_IDS_MAPPING[hex as '0x01'],
      });
    };
    setChainId(chainId);

    // Subscribe to chainId change
    provider.on('chainChanged', (_chainId: number) => {
      setChainId(Number(_chainId));
    });

    const accounts = await _web3.eth.getAccounts();
    setResult({ accounts });
    setWeb3(_web3);
    setAccount(accounts[0]);

    // Subscribe to accounts change
    provider.on('accountsChanged', (_accounts: string[]) => {
      setAccount(_accounts[0]);
    });
  }, [web3modal]);

  // eth_sign
  const handleSign = useCallback(async () => {
    if (!web3.eth) {
      setResult({ error: 'Please click connect first' });
      return;
    }
    const msg =
      '0x749324f788147326a2d3113d1926fcd82b4fb6f02e0a29b897a2e614dcc40464';

    try {
      const signature = await web3.eth.sign(msg, account);
      setResult({ signature });
    } catch (error) {
      console.info(error);
    }
  }, [web3, account]);

  // personal_sign
  const handlePersonalSign = useCallback(async () => {
    if (!web3.eth) {
      setResult({ error: 'Please click connect first' });
      return;
    }

    const msg =
      '0x749324f788147326a2d3113d1926fcd82b4fb6f02e0a29b897a2e614dcc40464';

    try {
      const signature = await web3.eth.personal.sign(msg, account, '');
      setResult({ signature });
    } catch (error) {
      console.info(error);
    }
  }, [web3, account]);

  // eth_sendTransaction
  const handleSendTx = useCallback(async () => {
    if (!web3.eth) {
      setResult({ error: 'Please click connect first' });
      return;
    }

    try {
      const tx = await web3.eth.sendTransaction({
        to: account,
        from: account,
        value: 0.001 * 1e18,
      });
      setResult(tx);
    } catch (error) {
      console.info(error);
    }
  }, [web3, account]);

  // clear connect
  const handleClear = async () => {
    web3modal.clearCachedProvider();
    setResult({});
    setWeb3({} as Web3);
  };

  return (
    <div>
      <div>
        <div className="network">Network: {JSON.stringify(network)}</div>
        <div className="network">Account: {account}</div>
        <div className="display-panel">{JSON.stringify(result, null, 2)}</div>
      </div>
      <div>
        <button type="button" onClick={handleClear}>
          Clear Connect
        </button>
        <button type="button" onClick={handleConnect}>
          Connect
        </button>
        <button type="button" onClick={handleSign}>
          Eth_sign
        </button>
        <button type="button" onClick={handlePersonalSign}>
          Personal_sign
        </button>
        <button type="button" onClick={handleSendTx}>
          Eth_sendTransaction
        </button>
      </div>
    </div>
  );
};
