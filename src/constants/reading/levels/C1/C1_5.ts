import { ReadingPassage } from "../../type";

export const C1_5: ReadingPassage[] = [
  {
    "title": "Quantum Computing Revolution",
    "slug": "quantum-computing",
    "passage": "Quantum computing represents a paradigm shift in computational capability that could fundamentally transform fields ranging from cryptography to drug discovery. Unlike classical computers that process information using bits (which exist in states of either 0 or 1), quantum computers utilize quantum bits or 'qubits' that can exist in superposition – simultaneously representing both 0 and 1 until measured. This property, along with quantum entanglement where qubits become correlated in ways that have no classical equivalent, enables quantum computers to perform certain calculations exponentially faster than even the most powerful supercomputers.\n\nThe potential applications are staggering. In pharmaceutical research, quantum computers could simulate molecular interactions at unprecedented scales, dramatically accelerating drug discovery and materials science. Financial institutions are exploring quantum algorithms for portfolio optimization and risk analysis. Climate scientists anticipate using quantum computing to create more accurate models of complex environmental systems. Perhaps most significantly, quantum computers could revolutionize artificial intelligence by processing vast datasets and identifying patterns beyond classical computational reach.\n\nHowever, quantum computing also poses existential threats to current cybersecurity infrastructure. Most modern encryption relies on the computational difficulty of factoring large numbers – a task that would take classical computers thousands of years but that a sufficiently powerful quantum computer could potentially solve in hours using Shor's algorithm. This has sparked a global race to develop 'post-quantum cryptography' that remains secure even against quantum attacks, with governments and organizations worldwide rushing to implement quantum-resistant encryption before 'Q-day' – the point at which quantum computers can break current encryption standards.\n\nDespite the revolutionary potential, significant technical challenges remain. Qubits are extraordinarily fragile, requiring extreme conditions such as temperatures near absolute zero and isolation from even minimal environmental interference. Error rates remain high, and scaling from the current hundreds of qubits to the millions likely needed for transformative applications presents formidable engineering obstacles. Some experts question whether true quantum advantage for practical problems will ever be economically viable, or whether quantum computing will remain a specialized tool for specific applications rather than a general-purpose technology.\n\nThe geopolitical dimension of quantum computing cannot be overlooked. Nations recognize that quantum supremacy could confer decisive advantages in intelligence gathering, military applications, and economic competitiveness. This has prompted massive government investments, with the United States, China, and European Union each committing billions to quantum research. The question of whether quantum computing will be democratically accessible or concentrated in the hands of a few powerful actors will have profound implications for global equity and power dynamics in the coming decades.",
    "questions": [
      {
        "question": "What distinguishes qubits from classical bits?",
        "options": [
          {
            "isCorrect": false,
            "option": "They are larger"
          },
          {
            "isCorrect": true,
            "option": "They can exist in superposition, representing both 0 and 1 simultaneously"
          },
          {
            "isCorrect": false,
            "option": "They are faster"
          },
          {
            "isCorrect": false,
            "option": "They use less energy"
          }
        ],
        "explanation": "Trong bài: 'quantum computers utilize quantum bits or 'qubits' that can exist in superposition – simultaneously representing both 0 and 1 until measured.'"
      },
      {
        "question": "What is 'Q-day'?",
        "options": [
          {
            "isCorrect": false,
            "option": "The day quantum computers are invented"
          },
          {
            "isCorrect": true,
            "option": "The point when quantum computers can break current encryption"
          },
          {
            "isCorrect": false,
            "option": "A quantum computing conference"
          },
          {
            "isCorrect": false,
            "option": "The day qubits were discovered"
          }
        ],
        "explanation": "Trong bài: 'rushing to implement quantum-resistant encryption before 'Q-day' – the point at which quantum computers can break current encryption standards.'"
      },
      {
        "question": "What extreme condition do qubits require?",
        "options": [
          {
            "isCorrect": false,
            "option": "Very high pressure"
          },
          {
            "isCorrect": true,
            "option": "Temperatures near absolute zero"
          },
          {
            "isCorrect": false,
            "option": "Complete darkness"
          },
          {
            "isCorrect": false,
            "option": "High altitude"
          }
        ],
        "explanation": "Trong bài: 'Qubits are extraordinarily fragile, requiring extreme conditions such as temperatures near absolute zero'"
      },
      {
        "question": "Which algorithm could quantum computers use to break encryption?",
        "options": [
          {
            "isCorrect": false,
            "option": "Moore's algorithm"
          },
          {
            "isCorrect": true,
            "option": "Shor's algorithm"
          },
          {
            "isCorrect": false,
            "option": "Einstein's algorithm"
          },
          {
            "isCorrect": false,
            "option": "Quantum algorithm X"
          }
        ],
        "explanation": "Trong bài: 'a sufficiently powerful quantum computer could potentially solve in hours using Shor's algorithm.'"
      },
      {
        "question": "What field could benefit from simulating molecular interactions?",
        "options": [
          {
            "isCorrect": false,
            "option": "Architecture only"
          },
          {
            "isCorrect": true,
            "option": "Pharmaceutical research and drug discovery"
          },
          {
            "isCorrect": false,
            "option": "Music production"
          },
          {
            "isCorrect": false,
            "option": "Sports analytics only"
          }
        ],
        "explanation": "Trong bài: 'In pharmaceutical research, quantum computers could simulate molecular interactions at unprecedented scales, dramatically accelerating drug discovery'"
      },
      {
        "question": "Why is there a geopolitical dimension to quantum computing?",
        "options": [
          {
            "isCorrect": false,
            "option": "It's only about scientific prestige"
          },
          {
            "isCorrect": true,
            "option": "It could confer advantages in intelligence, military, and economic competitiveness"
          },
          {
            "isCorrect": false,
            "option": "Countries want to control the weather"
          },
          {
            "isCorrect": false,
            "option": "It's purely academic interest"
          }
        ],
        "explanation": "Trong bài: 'Nations recognize that quantum supremacy could confer decisive advantages in intelligence gathering, military applications, and economic competitiveness.'"
      }
    ]
  }
];
