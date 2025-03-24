export interface PortQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export const portQuestions: PortQuestion[] = [
  {
    id: 1,
    question: "What ports are used for FTP (File Transfer Protocol)?",
    options: [
      "Ports 20 and 21",
      "Ports 22 and 23",
      "Ports 25 and 26",
      "Ports 80 and 81"
    ],
    correctAnswer: 0,
    explanation: "FTP uses port 20 for file transfers and port 21 for commands"
  },
  {
    id: 2,
    question: "Which port is used for SSH (Secure Shell)?",
    options: [
      "Port 21",
      "Port 22",
      "Port 23",
      "Port 24"
    ],
    correctAnswer: 1,
    explanation: "SSH uses port 22 for secure remote access"
  },
  {
    id: 3,
    question: "What port is used for Telnet?",
    options: [
      "Port 21",
      "Port 22",
      "Port 23",
      "Port 24"
    ],
    correctAnswer: 2,
    explanation: "Telnet uses port 23 for unencrypted remote access"
  },
  {
    id: 4,
    question: "Which port is used for SMTP (Simple Mail Transfer Protocol)?",
    options: [
      "Port 23",
      "Port 24",
      "Port 25",
      "Port 26"
    ],
    correctAnswer: 2,
    explanation: "SMTP uses port 25 for sending email (legacy)"
  },
  {
    id: 5,
    question: "What port is used for DNS (Domain Name System)?",
    options: [
      "Port 51",
      "Port 52",
      "Port 53",
      "Port 54"
    ],
    correctAnswer: 2,
    explanation: "DNS uses port 53 for both TCP and UDP"
  },
  {
    id: 6,
    question: "Which ports are used for DHCP (Dynamic Host Configuration Protocol)?",
    options: [
      "Ports 65 and 66",
      "Ports 67 and 68",
      "Ports 69 and 70",
      "Ports 71 and 72"
    ],
    correctAnswer: 1,
    explanation: "DHCP uses port 67 for server and port 68 for client"
  },
  {
    id: 7,
    question: "What port is used for HTTP (Hypertext Transfer Protocol)?",
    options: [
      "Port 78",
      "Port 79",
      "Port 80",
      "Port 81"
    ],
    correctAnswer: 2,
    explanation: "HTTP uses port 80 for unencrypted web traffic"
  },
  {
    id: 8,
    question: "Which port is used for POP3 (Post Office Protocol Version 3)?",
    options: [
      "Port 108",
      "Port 109",
      "Port 110",
      "Port 111"
    ],
    correctAnswer: 2,
    explanation: "POP3 uses port 110 for receiving email"
  },
  {
    id: 9,
    question: "What ports are used for NetBIOS/NetBT?",
    options: [
      "Ports 135 and 136",
      "Ports 137 and 138",
      "Ports 137 and 139",
      "Ports 138 and 139"
    ],
    correctAnswer: 2,
    explanation: "NetBIOS/NetBT uses ports 137 and 139 for TCP/UDP"
  },
  {
    id: 10,
    question: "Which port is used for IMAP (Internet Message Access Protocol)?",
    options: [
      "Port 141",
      "Port 142",
      "Port 143",
      "Port 144"
    ],
    correctAnswer: 2,
    explanation: "IMAP uses port 143 for email access"
  },
  {
    id: 11,
    question: "What ports are used for SNMP (Simple Network Management Protocol)?",
    options: [
      "Ports 159 and 160",
      "Ports 160 and 161",
      "Ports 161 and 162",
      "Ports 162 and 163"
    ],
    correctAnswer: 2,
    explanation: "SNMP uses ports 161 and 162 over UDP"
  },
  {
    id: 12,
    question: "Which port is used for LDAP (Lightweight Directory Access Protocol)?",
    options: [
      "Port 387",
      "Port 388",
      "Port 389",
      "Port 390"
    ],
    correctAnswer: 2,
    explanation: "LDAP uses port 389 for directory services"
  },
  {
    id: 13,
    question: "What port is used for HTTPS (Hypertext Transfer Protocol Secure)?",
    options: [
      "Port 441",
      "Port 442",
      "Port 443",
      "Port 444"
    ],
    correctAnswer: 2,
    explanation: "HTTPS uses port 443 for encrypted web traffic"
  },
  {
    id: 14,
    question: "Which port is used for SMB (Server Message Block)?",
    options: [
      "Port 443",
      "Port 444",
      "Port 445",
      "Port 446"
    ],
    correctAnswer: 2,
    explanation: "SMB uses port 445 and is related to CIFS (Common Internet File System)"
  },
  {
    id: 15,
    question: "What port is used for RDP (Remote Desktop Protocol)?",
    options: [
      "Port 3387",
      "Port 3388",
      "Port 3389",
      "Port 3390"
    ],
    correctAnswer: 2,
    explanation: "RDP uses port 3389 for remote desktop access"
  }
]; 