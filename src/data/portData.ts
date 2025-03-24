import { Question } from '../types/quiz';

export const portQuestions: Question[] = [
  {
    id: 'port-1',
    category: 'ports',
    question: 'Which port is commonly used for HTTP?',
    options: ['21', '22', '80', '443'],
    correctAnswer: 2,
    explanation: 'Port 80 is the default port for HTTP (Hypertext Transfer Protocol).',
    hardModeAnswer: '80',
  },
  {
    id: 'port-2',
    category: 'ports',
    question: 'Which port is commonly used for HTTPS?',
    options: ['21', '22', '80', '443'],
    correctAnswer: 3,
    explanation: 'Port 443 is the default port for HTTPS (HTTP Secure).',
    hardModeAnswer: '443',
  },
  {
    id: 'port-3',
    category: 'ports',
    question: 'Which port is commonly used for FTP?',
    options: ['21', '22', '23', '25'],
    correctAnswer: 0,
    explanation: 'Port 21 is the default port for FTP (File Transfer Protocol).',
    hardModeAnswer: '21',
  },
  {
    id: 'port-4',
    category: 'ports',
    question: 'Which port is commonly used for SSH?',
    options: ['21', '22', '23', '25'],
    correctAnswer: 1,
    explanation: 'Port 22 is the default port for SSH (Secure Shell).',
    hardModeAnswer: '22',
  },
  {
    id: 'port-5',
    category: 'ports',
    question: 'Which port is commonly used for SMTP?',
    options: ['21', '22', '23', '25'],
    correctAnswer: 3,
    explanation: 'Port 25 is the default port for SMTP (Simple Mail Transfer Protocol).',
    hardModeAnswer: '25',
  },
  {
    id: 'port-6',
    category: 'ports',
    question: 'Which ports are used for DHCP (Dynamic Host Configuration Protocol)?',
    options: [
      'Ports 67 and 68',
      'Ports 68 and 69',
      'Ports 69 and 70',
      'Ports 70 and 71'
    ],
    correctAnswer: 0,
    explanation: 'DHCP uses port 67 for the server and port 68 for the client.',
    hardModeAnswer: '67 and 68',
  },
  {
    id: 'port-7',
    category: 'ports',
    question: 'What port is used for Telnet?',
    options: [
      'Port 21',
      'Port 22',
      'Port 23',
      'Port 24'
    ],
    correctAnswer: 2,
    explanation: 'Telnet uses port 23 for unencrypted remote access',
    hardModeAnswer: '23',
  },
  {
    id: 'port-8',
    category: 'ports',
    question: 'Which port is used for POP3 (Post Office Protocol Version 3)?',
    options: [
      'Port 109',
      'Port 110',
      'Port 111',
      'Port 112'
    ],
    correctAnswer: 1,
    explanation: 'POP3 uses port 110 for retrieving email.',
    hardModeAnswer: '110',
  },
  {
    id: 'port-9',
    category: 'ports',
    question: 'What ports are used for NetBIOS/NetBT?',
    options: [
      'Ports 137, 138, 139',
      'Ports 138, 139, 140',
      'Ports 139, 140, 141',
      'Ports 140, 141, 142'
    ],
    correctAnswer: 0,
    explanation: 'NetBIOS uses ports 137 (name resolution), 138 (datagram), and 139 (session).',
    hardModeAnswer: '137, 138, 139',
  },
  {
    id: 'port-10',
    category: 'ports',
    question: 'Which port is used for IMAP (Internet Message Access Protocol)?',
    options: [
      'Port 142',
      'Port 143',
      'Port 144',
      'Port 145'
    ],
    correctAnswer: 1,
    explanation: 'IMAP uses port 143 for retrieving email.',
    hardModeAnswer: '143',
  },
  {
    id: 'port-11',
    category: 'ports',
    question: 'What ports are used for SNMP (Simple Network Management Protocol)?',
    options: [
      'Ports 160 and 161',
      'Ports 161 and 162',
      'Ports 162 and 163',
      'Ports 163 and 164'
    ],
    correctAnswer: 1,
    explanation: 'SNMP uses port 161 for queries and port 162 for traps.',
    hardModeAnswer: '161 and 162',
  },
  {
    id: 'port-12',
    category: 'ports',
    question: 'Which port is used for LDAP (Lightweight Directory Access Protocol)?',
    options: [
      'Port 388',
      'Port 389',
      'Port 390',
      'Port 391'
    ],
    correctAnswer: 1,
    explanation: 'LDAP uses port 389 for directory services.',
    hardModeAnswer: '389',
  },
  {
    id: 'port-13',
    category: 'ports',
    question: 'What port is used for HTTPS (Hypertext Transfer Protocol Secure)?',
    options: [
      'Port 441',
      'Port 442',
      'Port 443',
      'Port 444'
    ],
    correctAnswer: 2,
    explanation: 'HTTPS uses port 443 for encrypted web traffic.',
    hardModeAnswer: '443',
  },
  {
    id: 'port-14',
    category: 'ports',
    question: 'Which port is used for SMB (Server Message Block)?',
    options: [
      'Port 444',
      'Port 445',
      'Port 446',
      'Port 447'
    ],
    correctAnswer: 1,
    explanation: 'SMB uses port 445 for file and printer sharing.',
    hardModeAnswer: '445',
  },
  {
    id: 'port-15',
    category: 'ports',
    question: 'What port is used for RDP (Remote Desktop Protocol)?',
    options: [
      'Port 3388',
      'Port 3389',
      'Port 3390',
      'Port 3391'
    ],
    correctAnswer: 1,
    explanation: 'RDP uses port 3389 for remote desktop connections.',
    hardModeAnswer: '3389',
  },
]; 