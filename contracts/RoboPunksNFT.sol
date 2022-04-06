// SPDX-License-Identifier: UNLICENSED

pragma solidity >=0.4.22 <0.9.0;
//nft standards
import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
//define function only owner can use
import '@openzeppelin/contracts/access/Ownable.sol';

contract RoboPunksNFT is ERC721, Ownable {
    //price of mint
    uint256 public mintPrice;
    //current number of nfts user is minting
    uint256 public totalSupply;
    //max number allowed. will be 1k
    uint265 public maxSupply;
    //max # a specific wallet can mint
    uint256 public maxPerWallet;
    //if account is able to mint (from Ownable)
    bool public isPublicMintEnabled;
    //locator
    string internal baseTokenUri;
    //retrieve funds
    address payable public withdrawWallet;
    //track everything thats been minted
    //so user cant mint more than max
    mapping( address => uint256 ) public walletMints;


    //constructor runs first, NFT Name + Symbol
    constructor() payable ERC721('RoboPunks', 'RP') {
        mintPrice = 0.02 ether;
        totalSupply = 0;
        maxSupply = 1000;
        maxPerWallet = 3;
    }
    


}