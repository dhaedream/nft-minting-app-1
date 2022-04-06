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

    //isPubli..._ is an argument, not the variable declared ablove
    //external + only owner/deployer of contract can call this function
    function setPublicMintEnabled(bool isPublicMintEnabled_) external onlyOwner {
        //able to change state var (to result of arg?) when this function is called
        isPublicMintEnabled = isPublicMintEnabled_;
    }
    
    //calldata(similar to memory) - special data location that contains function arguments
    //has our images url
    function setBaseUri(string calldata baseTokenUri_) external onlyOwner {
        baseTokenUri = baseTokenUri_;
    }

    //overriding openZ ERC token/stndard of URI retrival with our own.
    //tokenUri calls its own images + we need our  own uri
    function tokenURI(uint256 tokenId_) public view override returns (string memory) {
        require(_exists(tokenId_), 'Token does not exist');
        //target our uri(baseTokenUri), adding tokenId to string + making json file
        return string(abi.encodePacked(baseTokenUri, Strings.toString(tokenId_), ".json"));
    }

}