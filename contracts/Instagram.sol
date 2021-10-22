// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Instagram is ERC20 {
    address public admin;
    uint256 public nextId;

    struct postStruct {
        address creator;
        uint256 postId;
        uint256 timestamp;
        uint256 likes;
        string message;
        string pictureHash;
    }

    mapping(uint256 => postStruct) public posts;

    constructor() ERC20("Insta Coin", "INST") {}

    function createNewPost(string memory _message, string memory _pictureHash)
        external
    {
        posts[nextId] = postStruct(
            msg.sender,
            nextId,
            block.timestamp,
            0,
            _message,
            _pictureHash
        );

        nextId++;
    }
}
