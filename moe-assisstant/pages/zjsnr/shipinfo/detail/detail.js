import './temp.js'

const app = getApp()

const mockAccessData = {
  "build": {
    "simple": [{
        "oil": 594,
        "ammo": 438,
        "steel": 666,
        "al": 233,
        "type": 0,
        "C": 26,
        "C_form": 1162,
        "scale": 0.0224
      },
      {
        "oil": 500,
        "ammo": 130,
        "steel": 650,
        "al": 201,
        "type": 0,
        "C": 76,
        "C_form": 3500,
        "scale": 0.0217
      },
      {
        "oil": 500,
        "ammo": 130,
        "steel": 650,
        "al": 231,
        "type": 0,
        "C": 395,
        "C_form": 20587,
        "scale": 0.0192
      }
    ],
    "detail": [{
        "oil": 500,
        "ammo": 130,
        "steel": 650,
        "al": 200,
        "type": 0,
        "C": 6,
        "C_form": 136,
        "scale": 0.0441
      },
      {
        "oil": 500,
        "ammo": 80,
        "steel": 650,
        "al": 231,
        "type": 0,
        "C": 5,
        "C_form": 124,
        "scale": 0.0403
      },
      {
        "oil": 400,
        "ammo": 30,
        "steel": 600,
        "al": 101,
        "type": 0,
        "C": 6,
        "C_form": 160,
        "scale": 0.0375
      },
      {
        "oil": 401,
        "ammo": 80,
        "steel": 650,
        "al": 130,
        "type": 0,
        "C": 4,
        "C_form": 108,
        "scale": 0.037
      },
      {
        "oil": 400,
        "ammo": 380,
        "steel": 650,
        "al": 130,
        "type": 0,
        "C": 4,
        "C_form": 116,
        "scale": 0.0345
      },
      {
        "oil": 400,
        "ammo": 130,
        "steel": 650,
        "al": 200,
        "type": 0,
        "C": 5,
        "C_form": 148,
        "scale": 0.0338
      },
      {
        "oil": 400,
        "ammo": 131,
        "steel": 650,
        "al": 130,
        "type": 0,
        "C": 4,
        "C_form": 120,
        "scale": 0.0333
      },
      {
        "oil": 407,
        "ammo": 87,
        "steel": 657,
        "al": 137,
        "type": 0,
        "C": 4,
        "C_form": 125,
        "scale": 0.032
      },
      {
        "oil": 400,
        "ammo": 80,
        "steel": 650,
        "al": 230,
        "type": 0,
        "C": 9,
        "C_form": 306,
        "scale": 0.0294
      },
      {
        "oil": 500,
        "ammo": 80,
        "steel": 650,
        "al": 201,
        "type": 0,
        "C": 13,
        "C_form": 447,
        "scale": 0.0291
      },
      {
        "oil": 400,
        "ammo": 80,
        "steel": 650,
        "al": 231,
        "type": 0,
        "C": 3,
        "C_form": 111,
        "scale": 0.027
      },
      {
        "oil": 500,
        "ammo": 80,
        "steel": 650,
        "al": 130,
        "type": 0,
        "C": 4,
        "C_form": 155,
        "scale": 0.0258
      },
      {
        "oil": 400,
        "ammo": 280,
        "steel": 650,
        "al": 130,
        "type": 0,
        "C": 5,
        "C_form": 199,
        "scale": 0.0251
      },
      {
        "oil": 594,
        "ammo": 438,
        "steel": 666,
        "al": 233,
        "type": 0,
        "C": 26,
        "C_form": 1162,
        "scale": 0.0224
      },
      {
        "oil": 500,
        "ammo": 130,
        "steel": 650,
        "al": 201,
        "type": 0,
        "C": 76,
        "C_form": 3500,
        "scale": 0.0217
      },
      {
        "oil": 500,
        "ammo": 131,
        "steel": 650,
        "al": 231,
        "type": 0,
        "C": 14,
        "C_form": 662,
        "scale": 0.0211
      },
      {
        "oil": 400,
        "ammo": 80,
        "steel": 651,
        "al": 130,
        "type": 0,
        "C": 13,
        "C_form": 623,
        "scale": 0.0209
      },
      {
        "oil": 400,
        "ammo": 80,
        "steel": 651,
        "al": 131,
        "type": 0,
        "C": 6,
        "C_form": 287,
        "scale": 0.0209
      },
      {
        "oil": 501,
        "ammo": 131,
        "steel": 651,
        "al": 231,
        "type": 0,
        "C": 18,
        "C_form": 866,
        "scale": 0.0208
      },
      {
        "oil": 400,
        "ammo": 130,
        "steel": 650,
        "al": 230,
        "type": 0,
        "C": 6,
        "C_form": 291,
        "scale": 0.0206
      },
      {
        "oil": 400,
        "ammo": 30,
        "steel": 650,
        "al": 130,
        "type": 0,
        "C": 3,
        "C_form": 147,
        "scale": 0.0204
      },
      {
        "oil": 630,
        "ammo": 600,
        "steel": 650,
        "al": 230,
        "type": 0,
        "C": 18,
        "C_form": 908,
        "scale": 0.0198
      },
      {
        "oil": 400,
        "ammo": 600,
        "steel": 650,
        "al": 130,
        "type": 0,
        "C": 6,
        "C_form": 305,
        "scale": 0.0197
      },
      {
        "oil": 401,
        "ammo": 81,
        "steel": 650,
        "al": 131,
        "type": 0,
        "C": 2,
        "C_form": 103,
        "scale": 0.0194
      },
      {
        "oil": 500,
        "ammo": 130,
        "steel": 650,
        "al": 231,
        "type": 0,
        "C": 395,
        "C_form": 20587,
        "scale": 0.0192
      },
      {
        "oil": 400,
        "ammo": 81,
        "steel": 650,
        "al": 131,
        "type": 0,
        "C": 14,
        "C_form": 748,
        "scale": 0.0187
      },
      {
        "oil": 400,
        "ammo": 580,
        "steel": 650,
        "al": 130,
        "type": 0,
        "C": 3,
        "C_form": 165,
        "scale": 0.0182
      },
      {
        "oil": 400,
        "ammo": 80,
        "steel": 650,
        "al": 100,
        "type": 0,
        "C": 4,
        "C_form": 224,
        "scale": 0.0179
      },
      {
        "oil": 500,
        "ammo": 130,
        "steel": 650,
        "al": 230,
        "type": 0,
        "C": 52,
        "C_form": 2967,
        "scale": 0.0175
      },
      {
        "oil": 400,
        "ammo": 81,
        "steel": 650,
        "al": 130,
        "type": 0,
        "C": 38,
        "C_form": 2186,
        "scale": 0.0174
      },
      {
        "oil": 530,
        "ammo": 230,
        "steel": 650,
        "al": 130,
        "type": 0,
        "C": 3,
        "C_form": 172,
        "scale": 0.0174
      },
      {
        "oil": 400,
        "ammo": 220,
        "steel": 650,
        "al": 130,
        "type": 0,
        "C": 3,
        "C_form": 175,
        "scale": 0.0171
      },
      {
        "oil": 430,
        "ammo": 80,
        "steel": 650,
        "al": 130,
        "type": 0,
        "C": 4,
        "C_form": 236,
        "scale": 0.0169
      },
      {
        "oil": 401,
        "ammo": 131,
        "steel": 651,
        "al": 131,
        "type": 0,
        "C": 8,
        "C_form": 484,
        "scale": 0.0165
      },
      {
        "oil": 406,
        "ammo": 80,
        "steel": 651,
        "al": 133,
        "type": 0,
        "C": 2,
        "C_form": 128,
        "scale": 0.0156
      },
      {
        "oil": 500,
        "ammo": 680,
        "steel": 650,
        "al": 230,
        "type": 0,
        "C": 3,
        "C_form": 192,
        "scale": 0.0156
      },
      {
        "oil": 400,
        "ammo": 181,
        "steel": 650,
        "al": 130,
        "type": 0,
        "C": 2,
        "C_form": 135,
        "scale": 0.0148
      },
      {
        "oil": 400,
        "ammo": 131,
        "steel": 650,
        "al": 131,
        "type": 0,
        "C": 6,
        "C_form": 416,
        "scale": 0.0144
      },
      {
        "oil": 401,
        "ammo": 81,
        "steel": 651,
        "al": 131,
        "type": 0,
        "C": 57,
        "C_form": 3957,
        "scale": 0.0144
      },
      {
        "oil": 500,
        "ammo": 130,
        "steel": 650,
        "al": 130,
        "type": 0,
        "C": 7,
        "C_form": 494,
        "scale": 0.0142
      },
      {
        "oil": 400,
        "ammo": 130,
        "steel": 650,
        "al": 130,
        "type": 0,
        "C": 229,
        "C_form": 16316,
        "scale": 0.014
      },
      {
        "oil": 500,
        "ammo": 210,
        "steel": 650,
        "al": 201,
        "type": 0,
        "C": 5,
        "C_form": 362,
        "scale": 0.0138
      },
      {
        "oil": 400,
        "ammo": 130,
        "steel": 650,
        "al": 101,
        "type": 0,
        "C": 12,
        "C_form": 873,
        "scale": 0.0137
      },
      {
        "oil": 400,
        "ammo": 80,
        "steel": 650,
        "al": 130,
        "type": 0,
        "C": 2788,
        "C_form": 213203,
        "scale": 0.0131
      },
      {
        "oil": 500,
        "ammo": 230,
        "steel": 650,
        "al": 130,
        "type": 0,
        "C": 17,
        "C_form": 1299,
        "scale": 0.0131
      },
      {
        "oil": 400,
        "ammo": 80,
        "steel": 650,
        "al": 132,
        "type": 0,
        "C": 3,
        "C_form": 230,
        "scale": 0.013
      },
      {
        "oil": 400,
        "ammo": 30,
        "steel": 650,
        "al": 30,
        "type": 0,
        "C": 2,
        "C_form": 155,
        "scale": 0.0129
      },
      {
        "oil": 400,
        "ammo": 80,
        "steel": 650,
        "al": 131,
        "type": 0,
        "C": 71,
        "C_form": 5538,
        "scale": 0.0128
      },
      {
        "oil": 400,
        "ammo": 130,
        "steel": 650,
        "al": 231,
        "type": 0,
        "C": 10,
        "C_form": 787,
        "scale": 0.0127
      },
      {
        "oil": 400,
        "ammo": 80,
        "steel": 650,
        "al": 30,
        "type": 0,
        "C": 2,
        "C_form": 168,
        "scale": 0.0119
      },
      {
        "oil": 400,
        "ammo": 130,
        "steel": 650,
        "al": 131,
        "type": 0,
        "C": 16,
        "C_form": 1391,
        "scale": 0.0115
      },
      {
        "oil": 400,
        "ammo": 80,
        "steel": 650,
        "al": 101,
        "type": 0,
        "C": 188,
        "C_form": 17032,
        "scale": 0.011
      },
      {
        "oil": 400,
        "ammo": 180,
        "steel": 650,
        "al": 130,
        "type": 0,
        "C": 18,
        "C_form": 1629,
        "scale": 0.011
      },
      {
        "oil": 400,
        "ammo": 230,
        "steel": 650,
        "al": 130,
        "type": 0,
        "C": 4,
        "C_form": 368,
        "scale": 0.0109
      },
      {
        "oil": 400,
        "ammo": 80,
        "steel": 600,
        "al": 101,
        "type": 0,
        "C": 2,
        "C_form": 187,
        "scale": 0.0107
      },
      {
        "oil": 400,
        "ammo": 80,
        "steel": 600,
        "al": 130,
        "type": 0,
        "C": 20,
        "C_form": 2282,
        "scale": 0.0088
      },
      {
        "oil": 400,
        "ammo": 130,
        "steel": 653,
        "al": 133,
        "type": 0,
        "C": 1,
        "C_form": 127,
        "scale": 0.0079
      },
      {
        "oil": 400,
        "ammo": 130,
        "steel": 500,
        "al": 400,
        "type": 0,
        "C": 2,
        "C_form": 29316,
        "scale": 0.0001
      }
    ]
  },
  "drop": {
    "simple": [{
        "node": 60305,
        "C": 843,
        "C_node": 37644,
        "C_z": 283,
        "scale": 0.0224,
        "nodeName": "6-3-D"
      },
      {
        "node": 60205,
        "C": 247,
        "C_node": 11668,
        "C_z": 857,
        "scale": 0.0212,
        "nodeName": "6-2-D"
      },
      {
        "node": 80208,
        "C": 306,
        "C_node": 14940,
        "C_z": 620,
        "scale": 0.0205,
        "nodeName": "8-2-G"
      }
    ],
    "detail": [{
        "node": 80212,
        "C": 83,
        "C_node": 3179,
        "C_z": 94,
        "scale": 0.0261,
        "nodeName": "8-2-K"
      },
      {
        "node": 60210,
        "C": 42,
        "C_node": 1755,
        "C_z": 145,
        "scale": 0.0239,
        "nodeName": "6-2-I"
      },
      {
        "node": 80206,
        "C": 224,
        "C_node": 9532,
        "C_z": 183,
        "scale": 0.0235,
        "nodeName": "8-2-E"
      },
      {
        "node": 60214,
        "C": 123,
        "C_node": 5376,
        "C_z": 574,
        "scale": 0.0229,
        "nodeName": "6-2-M"
      },
      {
        "node": 60208,
        "C": 128,
        "C_node": 5650,
        "C_z": 338,
        "scale": 0.0227,
        "nodeName": "6-2-G"
      },
      {
        "node": 80205,
        "C": 195,
        "C_node": 8612,
        "C_z": 1002,
        "scale": 0.0226,
        "nodeName": "8-2-D"
      },
      {
        "node": 60305,
        "C": 843,
        "C_node": 37644,
        "C_z": 283,
        "scale": 0.0224,
        "nodeName": "6-3-D"
      },
      {
        "node": 60211,
        "C": 71,
        "C_node": 3215,
        "C_z": 371,
        "scale": 0.0221,
        "nodeName": "6-2-J"
      },
      {
        "node": 60207,
        "C": 42,
        "C_node": 1940,
        "C_z": 117,
        "scale": 0.0216,
        "nodeName": "6-2-F"
      },
      {
        "node": 80207,
        "C": 204,
        "C_node": 9504,
        "C_z": 272,
        "scale": 0.0215,
        "nodeName": "8-2-F"
      },
      {
        "node": 60205,
        "C": 247,
        "C_node": 11668,
        "C_z": 857,
        "scale": 0.0212,
        "nodeName": "6-2-D"
      },
      {
        "node": 60206,
        "C": 24,
        "C_node": 1166,
        "C_z": 165,
        "scale": 0.0206,
        "nodeName": "6-2-E"
      },
      {
        "node": 80208,
        "C": 306,
        "C_node": 14940,
        "C_z": 620,
        "scale": 0.0205,
        "nodeName": "8-2-G"
      },
      {
        "node": 60403,
        "C": 647,
        "C_node": 31865,
        "C_z": 463,
        "scale": 0.0203,
        "nodeName": "6-4-B"
      },
      {
        "node": 80209,
        "C": 86,
        "C_node": 4354,
        "C_z": 306,
        "scale": 0.0198,
        "nodeName": "8-2-H"
      },
      {
        "node": 50309,
        "C": 3133,
        "C_node": 165087,
        "C_z": 3633,
        "scale": 0.019,
        "nodeName": "5-3-H"
      },
      {
        "node": 80113,
        "C": 1775,
        "C_node": 95745,
        "C_z": 4269,
        "scale": 0.0185,
        "nodeName": "8-1-L"
      },
      {
        "node": 80210,
        "C": 162,
        "C_node": 8750,
        "C_z": 106,
        "scale": 0.0185,
        "nodeName": "8-2-I"
      },
      {
        "node": 30110,
        "C": 532,
        "C_node": 29117,
        "C_z": 1049,
        "scale": 0.0183,
        "nodeName": "3-1-I"
      },
      {
        "node": 60406,
        "C": 259,
        "C_node": 14312,
        "C_z": 493,
        "scale": 0.0181,
        "nodeName": "6-4-E"
      },
      {
        "node": 60311,
        "C": 1339,
        "C_node": 74571,
        "C_z": 2703,
        "scale": 0.018,
        "nodeName": "6-3-J"
      },
      {
        "node": 60306,
        "C": 920,
        "C_node": 54226,
        "C_z": 6079,
        "scale": 0.017,
        "nodeName": "6-3-E"
      },
      {
        "node": 60404,
        "C": 326,
        "C_node": 19713,
        "C_z": 1243,
        "scale": 0.0165,
        "nodeName": "6-4-C"
      },
      {
        "node": 80109,
        "C": 1836,
        "C_node": 115370,
        "C_z": 2303,
        "scale": 0.0159,
        "nodeName": "8-1-H"
      },
      {
        "node": 40211,
        "C": 114,
        "C_node": 7212,
        "C_z": 756,
        "scale": 0.0158,
        "nodeName": "4-2-J"
      },
      {
        "node": 80214,
        "C": 1087,
        "C_node": 69026,
        "C_z": 4953,
        "scale": 0.0157,
        "nodeName": "8-2-M"
      },
      {
        "node": 60412,
        "C": 76,
        "C_node": 5062,
        "C_z": 1342,
        "scale": 0.015,
        "nodeName": "6-4-K"
      },
      {
        "node": 60309,
        "C": 1220,
        "C_node": 82360,
        "C_z": 13813,
        "scale": 0.0148,
        "nodeName": "6-3-H"
      },
      {
        "node": 60409,
        "C": 79,
        "C_node": 5338,
        "C_z": 923,
        "scale": 0.0148,
        "nodeName": "6-4-H"
      },
      {
        "node": 50211,
        "C": 515,
        "C_node": 35092,
        "C_z": 5536,
        "scale": 0.0147,
        "nodeName": "5-2-J"
      },
      {
        "node": 80111,
        "C": 50,
        "C_node": 3531,
        "C_z": 270,
        "scale": 0.0142,
        "nodeName": "8-1-J"
      },
      {
        "node": 80211,
        "C": 1080,
        "C_node": 76158,
        "C_z": 18517,
        "scale": 0.0142,
        "nodeName": "8-2-J"
      },
      {
        "node": 80213,
        "C": 23,
        "C_node": 1618,
        "C_z": 154,
        "scale": 0.0142,
        "nodeName": "8-2-L"
      },
      {
        "node": 30312,
        "C": 110,
        "C_node": 8481,
        "C_z": 1211,
        "scale": 0.013,
        "nodeName": "3-3-K"
      },
      {
        "node": 50107,
        "C": 47,
        "C_node": 3740,
        "C_z": 299,
        "scale": 0.0126,
        "nodeName": "5-1-F"
      },
      {
        "node": 50307,
        "C": 72,
        "C_node": 5729,
        "C_z": 335,
        "scale": 0.0126,
        "nodeName": "5-3-F"
      },
      {
        "node": 60408,
        "C": 28,
        "C_node": 2215,
        "C_z": 508,
        "scale": 0.0126,
        "nodeName": "6-4-G"
      },
      {
        "node": 30411,
        "C": 143,
        "C_node": 11820,
        "C_z": 1171,
        "scale": 0.0121,
        "nodeName": "3-4-J"
      },
      {
        "node": 50308,
        "C": 2174,
        "C_node": 182455,
        "C_z": 8218,
        "scale": 0.0119,
        "nodeName": "5-3-G"
      },
      {
        "node": 30109,
        "C": 359,
        "C_node": 31895,
        "C_z": 2174,
        "scale": 0.0113,
        "nodeName": "3-1-H"
      },
      {
        "node": 20107,
        "C": 11197,
        "C_node": 995470,
        "C_z": 64489,
        "scale": 0.0112,
        "nodeName": "2-1-F"
      },
      {
        "node": 20208,
        "C": 42,
        "C_node": 3773,
        "C_z": 390,
        "scale": 0.0111,
        "nodeName": "2-2-G"
      },
      {
        "node": 80202,
        "C": 2918,
        "C_node": 272871,
        "C_z": 9334,
        "scale": 0.0107,
        "nodeName": "8-2-A"
      },
      {
        "node": 60407,
        "C": 26,
        "C_node": 2472,
        "C_z": 1219,
        "scale": 0.0105,
        "nodeName": "6-4-F"
      },
      {
        "node": 50109,
        "C": 24,
        "C_node": 2324,
        "C_z": 346,
        "scale": 0.0103,
        "nodeName": "5-1-H"
      },
      {
        "node": 40209,
        "C": 72,
        "C_node": 7542,
        "C_z": 1050,
        "scale": 0.0095,
        "nodeName": "4-2-H"
      },
      {
        "node": 80108,
        "C": 28,
        "C_node": 2982,
        "C_z": 453,
        "scale": 0.0094,
        "nodeName": "8-1-G"
      },
      {
        "node": 30311,
        "C": 74,
        "C_node": 9833,
        "C_z": 1029,
        "scale": 0.0075,
        "nodeName": "3-3-J"
      },
      {
        "node": 30410,
        "C": 116,
        "C_node": 15831,
        "C_z": 757,
        "scale": 0.0073,
        "nodeName": "3-4-I"
      },
      {
        "node": 50408,
        "C": 14,
        "C_node": 2143,
        "C_z": 355,
        "scale": 0.0065,
        "nodeName": "5-4-G"
      },
      {
        "node": 80204,
        "C": 1054,
        "C_node": 178079,
        "C_z": 2316,
        "scale": 0.0059,
        "nodeName": "8-2-C"
      },
      {
        "node": 50209,
        "C": 212,
        "C_node": 40315,
        "C_z": 10010,
        "scale": 0.0053,
        "nodeName": "5-2-H"
      },
      {
        "node": 40207,
        "C": 9,
        "C_node": 1848,
        "C_z": 52,
        "scale": 0.0049,
        "nodeName": "4-2-F"
      },
      {
        "node": 50306,
        "C": 94,
        "C_node": 19270,
        "C_z": 1652,
        "scale": 0.0049,
        "nodeName": "5-3-E"
      },
      {
        "node": 80110,
        "C": 19,
        "C_node": 3892,
        "C_z": 38,
        "scale": 0.0049,
        "nodeName": "8-1-I"
      },
      {
        "node": 60204,
        "C": 12,
        "C_node": 2487,
        "C_z": 75,
        "scale": 0.0048,
        "nodeName": "6-2-C"
      },
      {
        "node": 60203,
        "C": 25,
        "C_node": 5395,
        "C_z": 882,
        "scale": 0.0046,
        "nodeName": "6-2-B"
      },
      {
        "node": 50104,
        "C": 5,
        "C_node": 1107,
        "C_z": 195,
        "scale": 0.0045,
        "nodeName": "5-1-C"
      },
      {
        "node": 40205,
        "C": 16,
        "C_node": 3654,
        "C_z": 161,
        "scale": 0.0044,
        "nodeName": "4-2-D"
      },
      {
        "node": 60302,
        "C": 176,
        "C_node": 41023,
        "C_z": 177,
        "scale": 0.0043,
        "nodeName": "6-3-A"
      },
      {
        "node": 80106,
        "C": 494,
        "C_node": 118163,
        "C_z": 1354,
        "scale": 0.0042,
        "nodeName": "8-1-E"
      },
      {
        "node": 40204,
        "C": 23,
        "C_node": 7043,
        "C_z": 747,
        "scale": 0.0033,
        "nodeName": "4-2-C"
      },
      {
        "node": 30309,
        "C": 7,
        "C_node": 2225,
        "C_z": 74,
        "scale": 0.0031,
        "nodeName": "3-3-H"
      },
      {
        "node": 30107,
        "C": 120,
        "C_node": 39666,
        "C_z": 3341,
        "scale": 0.003,
        "nodeName": "3-1-F"
      },
      {
        "node": 30305,
        "C": 21,
        "C_node": 6932,
        "C_z": 276,
        "scale": 0.003,
        "nodeName": "3-3-D"
      },
      {
        "node": 30103,
        "C": 16,
        "C_node": 5457,
        "C_z": 340,
        "scale": 0.0029,
        "nodeName": "3-1-B"
      },
      {
        "node": 60303,
        "C": 165,
        "C_node": 58396,
        "C_z": 6026,
        "scale": 0.0028,
        "nodeName": "6-3-B"
      },
      {
        "node": 30306,
        "C": 4,
        "C_node": 1466,
        "C_z": 53,
        "scale": 0.0027,
        "nodeName": "3-3-E"
      },
      {
        "node": 50105,
        "C": 9,
        "C_node": 3364,
        "C_z": 231,
        "scale": 0.0027,
        "nodeName": "5-1-D"
      },
      {
        "node": 30403,
        "C": 67,
        "C_node": 27009,
        "C_z": 648,
        "scale": 0.0025,
        "nodeName": "3-4-B"
      },
      {
        "node": 30405,
        "C": 59,
        "C_node": 27788,
        "C_z": 657,
        "scale": 0.0021,
        "nodeName": "3-4-D"
      },
      {
        "node": 30404,
        "C": 57,
        "C_node": 35775,
        "C_z": 849,
        "scale": 0.0016,
        "nodeName": "3-4-C"
      },
      {
        "node": 60202,
        "C": 20,
        "C_node": 13432,
        "C_z": 854,
        "scale": 0.0015,
        "nodeName": "6-2-A"
      },
      {
        "node": 80107,
        "C": 5,
        "C_node": 3417,
        "C_z": 320,
        "scale": 0.0015,
        "nodeName": "8-1-F"
      },
      {
        "node": 80105,
        "C": 17,
        "C_node": 12150,
        "C_z": 1854,
        "scale": 0.0014,
        "nodeName": "8-1-D"
      },
      {
        "node": 80203,
        "C": 295,
        "C_node": 243195,
        "C_z": 84841,
        "scale": 0.0012,
        "nodeName": "8-2-B"
      },
      {
        "node": 60402,
        "C": 121,
        "C_node": 115628,
        "C_z": 2750,
        "scale": 0.001,
        "nodeName": "6-4-A"
      },
      {
        "node": 50207,
        "C": 31,
        "C_node": 42082,
        "C_z": 10679,
        "scale": 0.0007,
        "nodeName": "5-2-F"
      }
    ]
  }
}

const mockShipInfo = {
  "id": 5256,
  "picId": 1097,
  "cid": 11009711,
  "dexIndex": 1097,
  "name": "长春",
  "nationality": "中国",
  "rarity": 5,
  "type": "导驱",
  "shipClass": "6607型3号舰",
  "life": 33,
  "power": "17/42",
  "armor": "15/40",
  "torpedo": "1/1",
  "antiAircraft": "30/60",
  "antiSubmarine": "0/0",
  "tracking": "15/42",
  "evadeRate": "45/89",
  "hitRate": "42/101",
  "luck": 25,
  "speed": 39,
  "aircraftCapacity": "8/8/8/0",
  "fireRange": "短",
  "dimension": "小型",
  "equipmentSlot": 3,
  "originalEquipment": "上游-1发射器/上游-1导弹",
  "fuel": "25",
  "cartridge": "65",
  "fuelCosting": "0.48",
  "steelCosting": "1.5",
  "timeCosting": "0.8",
  "recyclingIncome": "8/12/10/16",
  "enhancingIncome": "17/1/15/30",
  "firstSkillTitle": "四大金刚",
  "secondSkillTitle": null,
  "firstSkill": "自身战斗造成伤害提升10%，命中+10，演习获得经验提升15%。",
  "secondSkill": null
}

const originalShipInfo = {
  "id": 5087,
  "picId": 97,
  "cid": 10009711,
  "dexIndex": 97,
  "name": "果敢",
  "nationality": "苏联",
  "rarity": 4,
  "type": "驱逐",
  "shipClass": "7型17号舰",
  "life": 18,
  "power": "12/32",
  "armor": "8/23",
  "torpedo": "12/62",
  "antiAircraft": "20/50",
  "antiSubmarine": "24/57",
  "tracking": "5/16",
  "evadeRate": "39/83",
  "hitRate": "31/88",
  "luck": 25,
  "speed": 39,
  "aircraftCapacity": "0",
  "fireRange": "短",
  "dimension": "小型",
  "equipmentSlot": 2,
  "originalEquipment": "S国单装130毫米炮/四联533毫米鱼雷",
  "fuel": "10",
  "cartridge": "15",
  "fuelCosting": "0.48",
  "steelCosting": "0.9",
  "timeCosting": "0.5",
  "recyclingIncome": "4/8/6/0",
  "enhancingIncome": "0/12/8/0",
  "firstSkillTitle": null,
  "secondSkillTitle": null,
  "firstSkill": null,
  "secondSkill": null
}

Page({
  data: {
    shipUpdated: true,
    shipInfo: {},
    showIllustration: false,
    illustrationList: [
      'https://6d6f-moe-assisstant-hviue-1301021771.tcb.qcloud.la/zjsn/ships/L/NORMAL/L_NORMAL_1097.png',
      'https://6d6f-moe-assisstant-hviue-1301021771.tcb.qcloud.la/zjsn/ships/L/NORMAL/L_NORMAL_97_1.png',
      'https://6d6f-moe-assisstant-hviue-1301021771.tcb.qcloud.la/zjsn/ships/L/NORMAL/L_NORMAL_97_2.png',
      'https://6d6f-moe-assisstant-hviue-1301021771.tcb.qcloud.la/zjsn/ships/L/NORMAL/L_NORMAL_97_3.png'
    ],
    backgroundPicSrc: 'url(https://6d6f-moe-assisstant-hviue-1301021771.tcb.qcloud.la/zjsn/star-background/ship_star_bg5.png)',
    illustrationIndex: 0,

    illustrationTouchStartX: 0,

    illustrationTouchStartTime: 0,

    doubleFinger: 0,

    showSimpleAccessTable: false,
    buildTableWidthDistribution: ['12%', '12%', '12%', '12%', '12%', '20%', '20%'],
    dropTableWidthDistribution: ['25%', '25%', '25%', '25%'],
    buildSimpleTable: {
      title: '常用建造数据列表',
      explaination: '注：已过滤了样本数较少的数据',
      headerItemList: ['油', '弹', '钢', '铝', '出货数', '公式使用数', '出货率']
    },
    dropSimpleTable: {
      title: '常用掉落数据列表',
      explaination: '注：已过滤了样本数较少的数据',
      headerItemList: ['节点', '出货数', '总打捞数', '出货率']
    },

    showDetailAccessTable: false,
    detailTable: {
      explaination: '注：已过滤了样本数过少的数据'
    },
    detailWidthDistribution: []
  },
  onLoad() {
    this.initData()
  },
  initData(flag) {
    const defaultInfo = flag ? originalShipInfo : mockShipInfo

    const renderedShipInfo = Object.assign(defaultInfo, {
      url: app.filters.getZJSNShipXMediumPicture(defaultInfo.picId),
      backgroundPicSrc: app.filters.getZJSNShipBackground(defaultInfo.rarity)
    })

    this.setData({
      shipInfo: renderedShipInfo
    })
  },
  statusChange(e) {
    this.initData(!e.detail.value)
  },
  checkIllustration() {
    this.setData({
      showIllustration: true
    })

    wx.showToast({
      title: '单指快速左右滑动切换，慢速滑动调整位置，双指缩放',
      icon: 'none',
      duration: 2000
    })
  },
  checkDialogue() {
    wx.showToast({
      title: '当前功能未开放',
      icon: 'none',
      duration: 1000
    })
  },
  illustrationTouchstart(e) {
    if (e.touches.length === 1) {
      // 单指滑动事件
      this.data.illustrationTouchStartX = e.touches[0].pageX
      this.data.illustrationTouchStartTime = e.timeStamp
    } else if (e.touches.length === 2) {
      // 双指缩放事件
      this.doubleFinger = 2 //强制额外延迟1tick减少鬼触
    }

  },
  illustrationTouchend(e) {
    if (this.doubleFinger > 0) {
      this.doubleFinger -= 1
      return
    }
    if (e.changedTouches.length === 1) {
      // 单指滑动事件
      const illustrationTouchEndX = e.changedTouches[0].pageX
      const illustrationLength = this.data.illustrationList.length
      const windowWidth = wx.getSystemInfoSync().windowWidth

      if (e.timeStamp - this.data.illustrationTouchStartTime > 200) { //认为拖动时间大于200的不是快速滑动切换
        return
      }

      if (Math.abs(illustrationTouchEndX - this.data.illustrationTouchStartX) > windowWidth / 4) {
        const newIndex = illustrationTouchEndX - this.data.illustrationTouchStartX > 0 ? this.data.illustrationIndex + 1 : this.data.illustrationIndex - 1

        this.setData({
          illustrationIndex: app.util.getImageSwipperIndex(newIndex, illustrationLength)
        })
      } else if (Math.abs(illustrationTouchEndX - this.data.illustrationTouchStartX) < windowWidth / 40) {
        this.closeImage() //认为滑动距离特别短的是单击事件
      }
    } else if (e.changedTouches.length === 2) {}

  },
  closeImage() {
    if (this.doubleFinger > 0) {
      this.doubleFinger -= 1
      return
    }
    this.setData({
      showIllustration: false
    })
  },
  checkAccess() {
    this.setData2SimpleTable()
  },
  setData2SimpleTable() {
    const simpleBuildContent = mockAccessData.build.simple.map(item => {
      return [item.oil, item.ammo, item.steel, item.al, item.C, item.C_form, item.scale]
    })
    const simpleDropContent = mockAccessData.drop.simple.map(item => {
      return [item.nodeName, item.C, item.C_node, item.scale]
    })
    this.setData({
      showSimpleAccessTable: true,
      buildSimpleTable: Object.assign(this.data.buildSimpleTable, {
        contentList: simpleBuildContent
      }),
      dropSimpleTable: Object.assign(this.data.dropSimpleTable, {
        contentList: simpleDropContent
      })
    })
  },
  clickDetailTable(e) {
    return
  },
  checkMore(e) {
    const type = e.currentTarget.id

    let tableTitle
    let headerItemList
    let contentList
    let widthDistribution
    switch (type) {
      case 'build':
        tableTitle = '详细建造数据查询表'
        headerItemList = this.data.buildSimpleTable.headerItemList
        contentList = mockAccessData.build.detail.map(item => {
          return [item.oil, item.ammo, item.steel, item.al, item.C, item.C_form, item.scale]
        })
        widthDistribution = this.data.buildTableWidthDistribution
      break
      case 'drop':
        tableTitle = '详细掉落数据查询表'
        headerItemList = this.data.dropSimpleTable.headerItemList
        contentList = mockAccessData.drop.detail.map(item => {
          return [item.nodeName, item.C, item.C_node, item.scale]
        })
        widthDistribution = this.data.dropTableWidthDistribution
      break
    }

    this.setData({
      showDetailAccessTable: true,
      detailTable: Object.assign(this.data.detailTable, {
        title: tableTitle,
        headerItemList: headerItemList,
        contentList: contentList
      }),
      detailWidthDistribution: widthDistribution
    })
  },
  closeDetailTable() {
    this.setData({
      showDetailAccessTable: false
    })
  },
  clickOnTable() {
    return
  },
  closeSimpleAccessTable(e) {
    this.setData({
      showSimpleAccessTable: false
    })
  }
})