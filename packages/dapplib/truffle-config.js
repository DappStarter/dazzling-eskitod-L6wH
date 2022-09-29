require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good armed ozone sugar notice crime remain purpose hidden entry bridge situate'; 
let testAccounts = [
"0xd8a32963e9684a9037ba9d8fda9bc5c338d736545f28f52255eb2da57952e2ca",
"0xf9b1593797e36d0aecb617b328febbef10ccd49c447933b61ca111408c34f405",
"0xea4c115b75581f5c3376f20252626aba98db6c0e910302c963af55b3c55be5b9",
"0x5cd647b7d334a61185db1f26f1113f68d04285654ec4e7f7d6ee6a1fefb2bd09",
"0x1c8ae9ea36e26bd30089bb37087e7e2b63713d88f921fd62df6d8e6fdd847288",
"0x991a6ce50265de4467d48860e26e8fb4b0b228af4ee6bcafd377913688a9e580",
"0xbeba76336a7464e081324b10111fd93b21481f88cae8f8912b564991da663337",
"0x5d01adc62dd022d9daeac0c0fe7acb036a5de21e83920a6f981fb3e1d7df6601",
"0x53725dcfa7b518370fce1970050b03a53b529fda486fe492a0b7b3f7aea5ff04",
"0x755f8fe0d61ea7b846350c49bf98bc8130ca333a6a8d9552d03a685c87a33ac2"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
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

