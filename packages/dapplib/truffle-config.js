require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include knock flame success strong crawl office purchase install civil army gesture'; 
let testAccounts = [
"0x19fe484ab1b410cb5f1ee16e4d0030629ae3d5e84aa1ad5929b8c637aea8d1d8",
"0xbbed51bdd07aaa67e0d02aaa5ad0eb9e2ea510143bb2babda9df81766e315dc0",
"0x4cb75fed230cf11269558163c3e70d0d80c5a92d64531ebf197b54a6f5e2ad96",
"0x5bac1bd47eddf056ae3903b93a5e899b2ce3d990ac74e83334387084cab6c24e",
"0x73bf8a91741e687c73a72d013a56cade8a56b072aa63d5f919eb691211a13649",
"0x44632298a62587fff0fe1eda65b18b15897caa4efca1b77a731df2e6cca2821c",
"0x6da065ba66a911827494a9e236fb394a99d3d7d1415d23003b6444e71f14c409",
"0x7fe380e27988e4dfd30c9221ff23001749da016182ee057f9801f46c0d1edbce",
"0xf48a5a1188c22a89c9e60bfb35fee345caa1294b7285dd393fc7deab797a5444",
"0x53d6c30454a78e6fdad5d3b6aac0fb7782b780421162ce1390be1fbfaf495712"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
