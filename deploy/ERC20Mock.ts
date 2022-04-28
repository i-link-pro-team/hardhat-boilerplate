import { HardhatRuntimeEnvironment } from 'hardhat/types';

module.exports = async function (hre: HardhatRuntimeEnvironment) {
    console.log(`ChainId: ${await hre.getChainId()}`)

    const { deployments, getNamedAccounts, ethers } = hre;
    const { deploy } = deployments;

    const { deployer } = await getNamedAccounts();
    const balance = await ethers.provider.getBalance(deployer)

    console.log(`Deployer: ${deployer} , balance: ${ethers.utils.formatEther(balance)} `)

    const name = 'ERC20Mock'
    const symbol = 'ERC'
    const totalSupply = ethers.utils.parseUnits('1000000', 6)

    await deploy('ERC20Mock', {
        args: [
            name,
            symbol,
            totalSupply
        ],
        from: deployer,
        log: true,
    });
};

module.exports.tags = ["ERC20Mock"];