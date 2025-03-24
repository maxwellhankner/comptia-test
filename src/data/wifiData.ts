export interface WifiQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export const wifiQuestions: WifiQuestion[] = [
  {
    id: 1,
    question: "What is the maximum speed of 802.11 (Wi-Fi 0)?",
    options: [
      "1 Mbps",
      "2 Mbps",
      "5 Mbps",
      "10 Mbps"
    ],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "Which WiFi standard operates at 2.4GHz with a maximum speed of 11Mbps?",
    options: [
      "802.11a",
      "802.11b",
      "802.11g",
      "802.11n"
    ],
    correctAnswer: 1
  },
  {
    id: 3,
    question: "What is the maximum speed of 802.11a (Wi-Fi 2)?",
    options: [
      "11 Mbps",
      "54 Mbps",
      "150 Mbps",
      "300 Mbps"
    ],
    correctAnswer: 1
  },
  {
    id: 4,
    question: "Which WiFi standard operates at 2.4GHz with a maximum speed of 54Mbps?",
    options: [
      "802.11a",
      "802.11b",
      "802.11g",
      "802.11n"
    ],
    correctAnswer: 2
  },
  {
    id: 5,
    question: "What is the maximum speed of 802.11n (Wi-Fi 4)?",
    options: [
      "150 Mbps",
      "300 Mbps",
      "450 Mbps",
      "600 Mbps"
    ],
    correctAnswer: 3
  },
  {
    id: 6,
    question: "Which WiFi standard introduced MU-MIMO and operates at 5GHz?",
    options: [
      "802.11n",
      "802.11ac",
      "802.11ax",
      "802.11g"
    ],
    correctAnswer: 1
  },
  {
    id: 7,
    question: "What is the maximum speed of 802.11ax (Wi-Fi 6)?",
    options: [
      "3.5 Gbps",
      "6.9 Gbps",
      "9.6 Gbps",
      "10 Gbps"
    ],
    correctAnswer: 2
  },
  {
    id: 8,
    question: "Which WiFi standard operates on both 2.4GHz and 5GHz bands?",
    options: [
      "802.11ac",
      "802.11ax",
      "802.11g",
      "802.11a"
    ],
    correctAnswer: 1
  },
  {
    id: 9,
    question: "What channel width is used by 802.11b?",
    options: [
      "20 MHz",
      "22 MHz",
      "40 MHz",
      "80 MHz"
    ],
    correctAnswer: 1
  },
  {
    id: 10,
    question: "Which WiFi standard introduced MIMO technology?",
    options: [
      "802.11g",
      "802.11n",
      "802.11ac",
      "802.11ax"
    ],
    correctAnswer: 1
  }
]; 