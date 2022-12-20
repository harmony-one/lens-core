export interface SymbolMap<T> {
  [symbol: string]: T;
}

export type eNetwork = eEthereumNetwork | ePolygonNetwork | eXDaiNetwork | eHarmonyNetwork;

export enum eEthereumNetwork {
  kovan = 'kovan',
  ropsten = 'ropsten',
  main = 'main',
  hardhat = 'hardhat',
  tenderlyMain = 'tenderlyMain',
  harhatevm = 'harhatevm',
}

export enum ePolygonNetwork {
  matic = 'matic',
  mumbai = 'mumbai',
}

export enum eXDaiNetwork {
  xdai = 'xdai',
}

export enum eHarmonyNetwork {
  testnet0 = 'testnet0',
  mainnet0 = 'mainnet0',
  mainnet1 = 'mainnet1'
}

export enum EthereumNetworkNames {
  kovan = 'kovan',
  ropsten = 'ropsten',
  main = 'main',
  matic = 'matic',
  mumbai = 'mumbai',
  xdai = 'xdai',
}

export type tEthereumAddress = string;
export type tStringTokenBigUnits = string; // 1 ETH, or 10e6 USDC or 10e18 DAI
export type tStringTokenSmallUnits = string; // 1 wei, or 1 basic unit of USDC, or 1 basic unit of DAI

export type iParamsPerNetwork<T> =
  | iEthereumParamsPerNetwork<T>
  | iPolygonParamsPerNetwork<T>
  | iXDaiParamsPerNetwork<T>
  | iHarmonyParamsPerNetwork<T>;

export interface iParamsPerNetworkAll<T>
  extends iEthereumParamsPerNetwork<T>,
    iPolygonParamsPerNetwork<T>,
    iXDaiParamsPerNetwork<T>,
    iHarmonyParamsPerNetwork<T> {}

export interface iEthereumParamsPerNetwork<eNetwork> {
  [eEthereumNetwork.harhatevm]: eNetwork;
  [eEthereumNetwork.kovan]: eNetwork;
  [eEthereumNetwork.ropsten]: eNetwork;
  [eEthereumNetwork.main]: eNetwork;
  [eEthereumNetwork.hardhat]: eNetwork;
  [eEthereumNetwork.tenderlyMain]: eNetwork;
}

export interface iPolygonParamsPerNetwork<T> {
  [ePolygonNetwork.matic]: T;
  [ePolygonNetwork.mumbai]: T;
}

export interface iXDaiParamsPerNetwork<T> {
  [eXDaiNetwork.xdai]: T;
}

export interface iHarmonyParamsPerNetwork<T> {
  [eHarmonyNetwork.testnet0]: T;
  [eHarmonyNetwork.mainnet0]: T;
  [eHarmonyNetwork.mainnet1]: T;
}

export interface ObjectString {
  [key: string]: string;
}
