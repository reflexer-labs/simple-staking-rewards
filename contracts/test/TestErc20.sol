import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ERC20Test is ERC20("Incoom Token", "INC") {
    constructor() public {
        _mint(msg.sender, 1e9 ether);
    }
}
