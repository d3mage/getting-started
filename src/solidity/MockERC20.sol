// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

contract MockERC20 {

     function transferRemote(
        uint32 _destination,
        bytes32 _recipient,
        uint256 _amountOrId
    ) external payable virtual returns (bytes32) {
        return bytes32(0);
    }

    function quoteGasPayment(uint32 _destinationDomain)
        external
        view
        returns (uint256 _gasPayment)
    {
        return 0.000001 ether;
    }
}