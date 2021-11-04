// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./ERC721Tradable.sol";

/**
 * @title Lugonial
 * Lugonial - a contract for my non-fungible lugonials.
 */
contract Lugonial is ERC721Tradable {
    constructor(address _proxyRegistryAddress)
        ERC721Tradable("Lugonial", "LUGO", _proxyRegistryAddress)
    {}

    function baseTokenURI() override public pure returns (string memory) {
        return "https://nfteate.vercel.app/api/lugonials/";
    }

    // function contractURI() public pure returns (string memory) {
    //     return "https://creatures-api.opensea.io/contract/opensea-creatures";
    // }
}