import { task } from "hardhat/config"

task("mnemonic", "Generate new mnemonic", async (taskArgs, hre) => {
    const wallet = hre.ethers.Wallet.createRandom()
    console.log(`Mnemonic: ${wallet.mnemonic.phrase}`)
})
