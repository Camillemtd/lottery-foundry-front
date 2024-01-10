export const RUMBLE_SEPOLIA_ADRESS =
  "0x7Ccb26a0FC6eBaeA0EABc8df682beCe539640E97";

export const RUMBLE_CONTRACT_ABI = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "vrfCoordinator",
            type: "address",
          },
          {
            internalType: "address",
            name: "priceFeed",
            type: "address",
          },
          {
            internalType: "bytes32",
            name: "gasLane",
            type: "bytes32",
          },
          {
            internalType: "uint64",
            name: "subscriptionId",
            type: "uint64",
          },
          {
            internalType: "uint32",
            name: "callbackGasLimit",
            type: "uint32",
          },
        ],
        internalType: "struct TokenRumble.RumbleConfig",
        name: "config",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AccessControlBadConfirmation",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "neededRole",
        type: "bytes32",
      },
    ],
    name: "AccessControlUnauthorizedAccount",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "have",
        type: "address",
      },
      {
        internalType: "address",
        name: "want",
        type: "address",
      },
    ],
    name: "OnlyCoordinatorCanFulfill",
    type: "error",
  },
  {
    inputs: [],
    name: "TokenRumble__IncorrectRumbleData",
    type: "error",
  },
  {
    inputs: [],
    name: "TokenRumble__MaxNumOfParticipantsReached",
    type: "error",
  },
  {
    inputs: [],
    name: "TokenRumble__NotEnoughValueSent",
    type: "error",
  },
  {
    inputs: [],
    name: "TokenRumble__RumbleClosed",
    type: "error",
  },
  {
    inputs: [],
    name: "TokenRumble__RumbleNotFound",
    type: "error",
  },
  {
    inputs: [],
    name: "TokenRumble__RumbleStillRunning",
    type: "error",
  },
  {
    inputs: [],
    name: "TokenRumble__TransferToWinnerFailed",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "rumbleId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "winner",
        type: "address",
      },
    ],
    name: "RumbleClosed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "rumbleId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "rewardAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "entryFee",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "maxNumOfParticipants",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "duration",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "startTime",
        type: "uint64",
      },
    ],
    name: "RumbleCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "rumbleId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "participant",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "entryFee",
        type: "uint256",
      },
    ],
    name: "RumbleEntered",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_rumbleId",
        type: "uint256",
      },
    ],
    name: "closeRumble",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_rewardAmount",
        type: "uint256",
      },
      {
        internalType: "uint64",
        name: "_maxNumOfParticipants",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "_duration",
        type: "uint64",
      },
    ],
    name: "createRumble",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_rumbleId",
        type: "uint256",
      },
    ],
    name: "enterRumbleETH",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_rumbleId",
        type: "uint256",
      },
    ],
    name: "getRumble",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "rewardAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "entryFee",
            type: "uint256",
          },
          {
            internalType: "address[]",
            name: "participants",
            type: "address[]",
          },
          {
            internalType: "address",
            name: "winner",
            type: "address",
          },
          {
            internalType: "bool",
            name: "closed",
            type: "bool",
          },
          {
            internalType: "uint64",
            name: "maxNumOfParticipants",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "duration",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "startTime",
            type: "uint64",
          },
        ],
        internalType: "struct TokenRumble.Rumble",
        name: "rumble",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_rumbleId",
        type: "uint256",
      },
    ],
    name: "getRumbleDuration",
    outputs: [
      {
        internalType: "uint64",
        name: "duration",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_rumbleId",
        type: "uint256",
      },
    ],
    name: "getRumbleEntryFee",
    outputs: [
      {
        internalType: "uint256",
        name: "entryFee",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_rumbleId",
        type: "uint256",
      },
    ],
    name: "getRumbleMaxNumOfParticipants",
    outputs: [
      {
        internalType: "uint64",
        name: "maxNumOfParticipants",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_rumbleId",
        type: "uint256",
      },
    ],
    name: "getRumbleParticipants",
    outputs: [
      {
        internalType: "address[]",
        name: "participants",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_rumbleId",
        type: "uint256",
      },
    ],
    name: "getRumbleRewardAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "rewardAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_rumbleId",
        type: "uint256",
      },
    ],
    name: "getRumbleStartTime",
    outputs: [
      {
        internalType: "uint64",
        name: "startTime",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_rumbleId",
        type: "uint256",
      },
    ],
    name: "getRumbleWinner",
    outputs: [
      {
        internalType: "address",
        name: "winner",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "requestId",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "randomWords",
        type: "uint256[]",
      },
    ],
    name: "rawFulfillRandomWords",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "callerConfirmation",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "s_rumbleCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
