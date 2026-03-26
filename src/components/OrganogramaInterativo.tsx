import React, { useCallback, useEffect } from 'react';
import ReactFlow, {
  Background,
  Controls,
  useNodesState,
  useEdgesState,
  MarkerType,
  Handle,
  Position,
  NodeProps,
  Node,
  Edge
} from 'reactflow';
import 'reactflow/dist/style.css';
import { ArrowLeft } from 'lucide-react';

// --- JSON DATA WITH STATIC POSITIONS ---
const rawNodes = [
  // NÍVEL 1: TOPO
  { id: "direcao-executiva", type: "custom", data: { title: "DIREÇÃO EXECUTIVA", names: [] }, position: { x: 500, y: 0 }, style: { backgroundColor: "#3b82f6" } },
  
  // NÍVEL 2: DIREÇÃO GERAL E FINANCEIRA
  { id: "sara-diretora-geral", type: "custom", data: { title: "Diretora Geral", names: ["SARA"] }, position: { x: 250, y: 100 }, style: { backgroundColor: "#3b82f6" } },
  { id: "carlos-diretor-financeiro", type: "custom", data: { title: "Diretor Financeiro", names: ["CARLOS"] }, position: { x: 750, y: 100 }, style: { backgroundColor: "#3b82f6" } },

  // NÍVEL 3: APOIO E OPERACIONAL
  { id: "direcao-corporativa", type: "custom", data: { title: "DIREÇÃO CORPORATIVA", names: [] }, position: { x: 0, y: 220 }, style: { backgroundColor: "#a855f7" } },
  { id: "direcao-operacional", type: "custom", data: { title: "DIREÇÃO OPERACIONAL", names: [] }, position: { x: 500, y: 220 }, style: { backgroundColor: "#0ea5e9" } },
  { id: "controlo-luiza", type: "custom", data: { title: "Chefe de Controlo", names: ["LUÍZA"] }, position: { x: 1000, y: 220 }, style: { backgroundColor: "#ef4444" } },

  // NÍVEL 4: ÁREAS INTERMÉDIAS
  { id: "daniela-dir-rh", type: "custom", data: { title: "Dir. Serviços Técnicos RH", names: ["DANIELA"] }, position: { x: -100, y: 340 }, style: { backgroundColor: "#a855f7" } },
  { id: "prego-dir-financeiro", type: "custom", data: { title: "Dir. Serviços Financeiros & Administ.", names: ["PREGO"] }, position: { x: 100, y: 340 }, style: { backgroundColor: "#a855f7" } },
  { id: "assistente-direcao", type: "custom", data: { title: "Assistente de Direção", names: [] }, position: { x: 300, y: 340 }, style: { backgroundColor: "#0ea5e9" } },
  { id: "eva-dir-restauracao", type: "custom", data: { title: "Dir. Restauração & Bebidas", names: ["EVA"] }, position: { x: 500, y: 340 }, style: { backgroundColor: "#0ea5e9" } },
  { id: "manutencao", type: "custom", data: { title: "MANUTENÇÃO", names: [] }, position: { x: 700, y: 340 }, style: { backgroundColor: "#22c55e" } },

  // NÍVEL 5: CHEFIAS DE DEPARTAMENTO
  { id: "claudia-chefe-seccao", type: "custom", data: { title: "Chefe de Secção (Administrativa)", names: ["CLÁUDIA"] }, position: { x: 100, y: 460 }, style: { backgroundColor: "#a855f7" } },
  { id: "eviline-gerente", type: "custom", data: { title: "Gerente", names: ["EVILINE"] }, position: { x: 300, y: 460 }, style: { backgroundColor: "#eab308" } },
  { id: "joao-chefe-cozinha", type: "custom", data: { title: "Chefe de Cozinha", names: ["JOÃO"] }, position: { x: 500, y: 460 }, style: { backgroundColor: "#ea580c" } },
  { id: "ze-manutencao", type: "custom", data: { title: "Chefe de Manutenção Coord. e Serv. técnicos", names: ["ZÉ"] }, position: { x: 700, y: 460 }, style: { backgroundColor: "#22c55e" } },

  // NÍVEL 6: SUPERVISÃO E SUB-CHEFIAS
  { id: "ana-supervisora-operacoes", type: "custom", data: { title: "Supervisora de Operações", names: ["ANA"] }, position: { x: 150, y: 580 }, style: { backgroundColor: "#14b8a6" } },
  { id: "comercial-assistente", type: "custom", data: { title: "Assistente de Vendas", names: [] }, position: { x: 350, y: 580 }, style: { backgroundColor: "#be185d" } },
  { id: "rececao-rececionista", type: "custom", data: { title: "Rececionista", names: [] }, position: { x: 550, y: 580 }, style: { backgroundColor: "#f97316" } },
  { id: "cozinha", type: "custom", data: { title: "COZINHA", names: [] }, position: { x: 750, y: 580 }, style: { backgroundColor: "#ea580c" } },
  { id: "ajudante-manutencao", type: "custom", data: { title: "Ajudante", names: [] }, position: { x: 950, y: 580 }, style: { backgroundColor: "#22c55e" } },

  // NÍVEL 7: OPERAÇÃO 1
  { id: "mesas-manu", type: "custom", data: { title: "Chefe de Sala", names: ["MANU"] }, position: { x: -50, y: 700 }, style: { backgroundColor: "#78350f" } },
  { id: "drinks-nilton", type: "custom", data: { title: "Chefe de Bar", names: ["NILTON"] }, position: { x: 150, y: 700 }, style: { backgroundColor: "#f87171" } },
  { id: "housekeeping", type: "custom", data: { title: "HOUSEKEEPING", names: [] }, position: { x: 350, y: 700 }, style: { backgroundColor: "#ec4899" } },
  { id: "ajudante-rececao", type: "custom", data: { title: "Ajudante", names: [] }, position: { x: 550, y: 700 }, style: { backgroundColor: "#f97316" } },
  { id: "subchefe-cozinha", type: "custom", data: { title: "Sub-Chefe de Cozinha", names: [] }, position: { x: 750, y: 700 }, style: { backgroundColor: "#ea580c" } },
  { id: "cozinha-preparacao", type: "custom", data: { title: "COZINHA DE PREPARAÇÃO", names: [] }, position: { x: 950, y: 700 }, style: { backgroundColor: "#ea580c" } },
  { id: "copa", type: "custom", data: { title: "COPA", names: [] }, position: { x: 1150, y: 700 }, style: { backgroundColor: "#ea580c" } },

  // NÍVEL 8: OPERAÇÃO 2
  { id: "ajudante-mesas", type: "custom", data: { title: "Ajudante", names: [] }, position: { x: -50, y: 820 }, style: { backgroundColor: "#78350f" } },
  { id: "ajudante-drinks", type: "custom", data: { title: "Ajudante", names: [] }, position: { x: 150, y: 820 }, style: { backgroundColor: "#f87171" } },
  { id: "linda-limpeza", type: "custom", data: { title: "Técnica de Limpeza", names: ["LINDA"] }, position: { x: 350, y: 820 }, style: { backgroundColor: "#ec4899" } },
  { id: "katia-cozinheira", type: "custom", data: { title: "Cozinheira de 1ª", names: ["KÁTIA"] }, position: { x: 750, y: 820 }, style: { backgroundColor: "#ea580c" } },
  { id: "chefe-copa", type: "custom", data: { title: "Chefe de Copa", names: [] }, position: { x: 1150, y: 820 }, style: { backgroundColor: "#ea580c" } },

  // NÍVEL 9: OPERAÇÃO 3
  { id: "cozinheira-2a", type: "custom", data: { title: "Cozinheira de 2ª", names: ["VIVIANA", "TIA"] }, position: { x: 750, y: 940 }, style: { backgroundColor: "#ea580c" } },
  { id: "copeiro-senior", type: "custom", data: { title: "Copeiro Sénior", names: [] }, position: { x: 1150, y: 940 }, style: { backgroundColor: "#ea580c" } },

  // NÍVEL 10: OPERAÇÃO 4
  { id: "copeiro-junior", type: "custom", data: { title: "Copeiro Júnior", names: [] }, position: { x: 1150, y: 1060 }, style: { backgroundColor: "#ea580c" } },

  // NÍVEL 11: OPERAÇÃO 5
  { id: "sandy-cozinheira", type: "custom", data: { title: "Cozinheira de 3ª", names: ["SANDY"] }, position: { x: 750, y: 1180 }, style: { backgroundColor: "#ea580c" } },

  // NÍVEL 12: OPERAÇÃO 6
  { id: "nausica-cozinheira", type: "custom", data: { title: "Cozinheira de 3ª", names: ["NAUSICA"] }, position: { x: 750, y: 1300 }, style: { backgroundColor: "#ea580c" } },

  // NÍVEL 13: OPERAÇÃO 7
  { id: "ajudante-cozinha", type: "custom", data: { title: "Ajudante", names: ["VIVIANA", "TIA"] }, position: { x: 750, y: 1420 }, style: { backgroundColor: "#ea580c" } },

  // OUTROS
  { id: "food", type: "custom", data: { title: "FOOD", names: [] }, position: { x: 500, y: 580 }, style: { backgroundColor: "#c2410c" } },
  { id: "armazem-lucas", type: "custom", data: { title: "Encarregado de Armazém", names: ["LUCAS"] }, position: { x: 500, y: 700 }, style: { backgroundColor: "#84cc16" } },
  { id: "ajudante-armazem", type: "custom", data: { title: "Ajudante", names: [] }, position: { x: 500, y: 820 }, style: { backgroundColor: "#84cc16" } }
];

const rawEdges = [
  // HIERARQUIA (SÓLIDAS)
  { id: "e-direcao-executiva-sara-diretora-geral", source: "direcao-executiva", target: "sara-diretora-geral" },
  { id: "e-direcao-executiva-carlos-diretor-financeiro", source: "direcao-executiva", target: "carlos-diretor-financeiro" },
  { id: "e-sara-diretora-geral-direcao-corporativa", source: "sara-diretora-geral", target: "direcao-corporativa" },
  { id: "e-direcao-executiva-direcao-operacional", source: "direcao-executiva", target: "direcao-operacional" },
  { id: "e-direcao-operacional-manutencao", source: "direcao-operacional", target: "manutencao" },
  { id: "e-manutencao-ze-manutencao", source: "manutencao", target: "ze-manutencao" },
  { id: "e-ze-manutencao-ajudante-manutencao", source: "ze-manutencao", target: "ajudante-manutencao" },
  { id: "e-direcao-corporativa-daniela-dir-rh", source: "direcao-corporativa", target: "daniela-dir-rh" },
  { id: "e-direcao-corporativa-prego-dir-financeiro", source: "direcao-corporativa", target: "prego-dir-financeiro" },
  { id: "e-prego-dir-financeiro-claudia-chefe-seccao", source: "prego-dir-financeiro", target: "claudia-chefe-seccao" },
  { id: "e-direcao-operacional-assistente-direcao", source: "direcao-operacional", target: "assistente-direcao" },
  { id: "e-direcao-operacional-eva-dir-restauracao", source: "direcao-operacional", target: "eva-dir-restauracao" },
  { id: "e-eva-dir-restauracao-eviline-gerente", source: "eva-dir-restauracao", target: "eviline-gerente" },
  { id: "e-eva-dir-restauracao-joao-chefe-cozinha", source: "eva-dir-restauracao", target: "joao-chefe-cozinha" },
  { id: "e-eviline-gerente-ana-supervisora-operacoes", source: "eviline-gerente", target: "ana-supervisora-operacoes" },
  { id: "e-ana-supervisora-operacoes-controlo-luiza", source: "ana-supervisora-operacoes", target: "controlo-luiza" },
  { id: "e-ana-supervisora-operacoes-mesas-manu", source: "ana-supervisora-operacoes", target: "mesas-manu" },
  { id: "e-mesas-manu-ajudante-mesas", source: "mesas-manu", target: "ajudante-mesas" },
  { id: "e-ana-supervisora-operacoes-drinks-nilton", source: "ana-supervisora-operacoes", target: "drinks-nilton" },
  { id: "e-drinks-nilton-ajudante-drinks", source: "drinks-nilton", target: "ajudante-drinks" },
  { id: "e-ana-supervisora-operacoes-housekeeping", source: "ana-supervisora-operacoes", target: "housekeeping" },
  { id: "e-housekeeping-linda-limpeza", source: "housekeeping", target: "linda-limpeza" },
  { id: "e-eviline-gerente-comercial-assistente", source: "eviline-gerente", target: "comercial-assistente" },
  { id: "e-eviline-gerente-rececao-rececionista", source: "eviline-gerente", target: "rececao-rececionista" },
  { id: "e-rececao-rececionista-ajudante-rececao", source: "rececao-rececionista", target: "ajudante-rececao" },
  { id: "e-joao-chefe-cozinha-food", source: "joao-chefe-cozinha", target: "food" },
  { id: "e-joao-chefe-cozinha-cozinha", source: "joao-chefe-cozinha", target: "cozinha" },
  { id: "e-cozinha-subchefe-cozinha", source: "cozinha", target: "subchefe-cozinha" },
  { id: "e-subchefe-cozinha-katia-cozinheira", source: "subchefe-cozinha", target: "katia-cozinheira" },
  { id: "e-katia-cozinheira-cozinheira-2a", source: "katia-cozinheira", target: "cozinheira-2a" },
  { id: "e-cozinheira-2a-sandy-cozinheira", source: "cozinheira-2a", target: "sandy-cozinheira" },
  { id: "e-sandy-cozinheira-nausica-cozinheira", source: "sandy-cozinheira", target: "nausica-cozinheira" },
  { id: "e-nausica-cozinheira-ajudante-cozinha", source: "nausica-cozinheira", target: "ajudante-cozinha" },
  { id: "e-joao-chefe-cozinha-cozinha-preparacao", source: "joao-chefe-cozinha", target: "cozinha-preparacao" },
  { id: "e-joao-chefe-cozinha-copa", source: "joao-chefe-cozinha", target: "copa" },
  { id: "e-copa-chefe-copa", source: "copa", target: "chefe-copa" },
  { id: "e-chefe-copa-copeiro-senior", "source": "chefe-copa", target: "copeiro-senior" },
  { id: "e-copeiro-senior-copeiro-junior", "source": "copeiro-senior", target: "copeiro-junior" },
  { id: "e-joao-chefe-cozinha-armazem-lucas", "source": "joao-chefe-cozinha", target: "armazem-lucas" },
  { id: "e-armazem-lucas-ajudante-armazem", "source": "armazem-lucas", target: "ajudante-armazem" },
  
  // COORDENAÇÃO (TRACEJADAS)
  { id: "c-sara-diretora-geral-daniela-dir-rh", source: "sara-diretora-geral", target: "daniela-dir-rh", style: { strokeDasharray: "5,5" } },
  { id: "c-carlos-diretor-financeiro-prego-dir-financeiro", source: "carlos-diretor-financeiro", target: "prego-dir-financeiro", style: { strokeDasharray: "5,5" } },
  { id: "c-direcao-corporativa-direcao-operacional", source: "direcao-corporativa", target: "direcao-operacional", style: { strokeDasharray: "5,5" } },
  { id: "c-direcao-operacional-direcao-corporativa", source: "direcao-operacional", target: "direcao-corporativa", style: { strokeDasharray: "5,5" } },
  { id: "c-direcao-operacional-manutencao", source: "direcao-operacional", target: "manutencao", style: { strokeDasharray: "5,5" } },
  { id: "c-manutencao-direcao-operacional", source: "manutencao", target: "direcao-operacional", style: { strokeDasharray: "5,5" } },
  { id: "c-daniela-dir-rh-sara-diretora-geral", source: "daniela-dir-rh", target: "sara-diretora-geral", style: { strokeDasharray: "5,5" } },
  { id: "c-prego-dir-financeiro-carlos-diretor-financeiro", source: "prego-dir-financeiro", target: "carlos-diretor-financeiro", style: { strokeDasharray: "5,5" } },
  { id: "c-claudia-chefe-seccao-assistente-direcao", source: "claudia-chefe-seccao", target: "assistente-direcao", style: { strokeDasharray: "5,5" } },
  { id: "c-assistente-direcao-claudia-chefe-seccao", source: "assistente-direcao", target: "claudia-chefe-seccao", style: { strokeDasharray: "5,5" } },
  { id: "c-food-armazem-lucas", source: "food", target: "armazem-lucas", style: { strokeDasharray: "5,5" } },
  { id: "c-cozinha-preparacao-armazem-lucas", source: "cozinha-preparacao", target: "armazem-lucas", style: { strokeDasharray: "5,5" } },
  { id: "c-armazem-lucas-food", source: "armazem-lucas", target: "food", style: { strokeDasharray: "5,5" } },
  { id: "c-armazem-lucas-cozinha-preparacao", source: "armazem-lucas", target: "cozinha-preparacao", style: { strokeDasharray: "5,5" } }
];

// --- PREPARE INITIAL STATE ---
const initialNodes: Node[] = rawNodes.map(node => ({
  ...node,
  style: {
    ...node.style,
    color: '#fff',
    borderRadius: '12px',
    padding: '10px',
    width: 180,
    textAlign: 'center',
    border: '2px solid rgba(255,255,255,0.2)',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  }
}));

const initialEdges: Edge[] = rawEdges.map(edge => {
  const isCoordination = edge.id.startsWith('c-');
  return {
    ...edge,
    type: 'smoothstep',
    markerEnd: { type: MarkerType.ArrowClosed, color: isCoordination ? '#cbd5e1' : '#94a3b8' },
    style: edge.style ? { ...edge.style, strokeWidth: 2, stroke: '#cbd5e1' } : { stroke: '#94a3b8', strokeWidth: 2 },
    // Animação de marcha para as linhas tracejadas
    className: isCoordination ? 'marching-ants' : '',
  };
});

// --- CUSTOM NODE COMPONENT ---
const CustomNode = ({ data }: NodeProps) => {
  return (
    <>
      <Handle type="target" position={Position.Top} className="opacity-0" />
      <div className="flex flex-col items-center justify-center h-full w-full p-2">
        <strong className="text-[11px] uppercase block mb-1 opacity-90 text-center">{data.title}</strong>
        {data.names && data.names.length > 0 && (
          <ul className="text-[12px] font-normal block text-center list-none p-0 m-0">
            {data.names.map((name: string, index: number) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        )}
      </div>
      <Handle type="source" position={Position.Bottom} className="opacity-0" />
    </>
  );
};

const nodeTypes = { custom: CustomNode };

// --- MAIN COMPONENT ---
interface OrganogramaInterativoProps {
  onBack?: () => void;
}

export default function OrganogramaInterativo({ onBack }: OrganogramaInterativoProps) {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  // Helper to find ancestors and descendants (hierarchical only)
  const getConnectedNodesAndEdges = (nodeId: string) => {
    const connectedNodes = new Set<string>([nodeId]);
    const connectedEdges = new Set<string>();

    const findDescendants = (id: string) => {
      initialEdges.forEach(edge => {
        if (edge.source === id && !edge.id.startsWith('c-')) {
          if (!connectedNodes.has(edge.target)) {
            connectedNodes.add(edge.target);
            connectedEdges.add(edge.id);
            findDescendants(edge.target);
          } else {
            connectedEdges.add(edge.id);
          }
        }
      });
    };

    const findAncestors = (id: string) => {
      initialEdges.forEach(edge => {
        if (edge.target === id && !edge.id.startsWith('c-')) {
          if (!connectedNodes.has(edge.source)) {
            connectedNodes.add(edge.source);
            connectedEdges.add(edge.id);
            findAncestors(edge.source);
          } else {
            connectedEdges.add(edge.id);
          }
        }
      });
    };

    findDescendants(nodeId);
    findAncestors(nodeId);

    return { connectedNodes, connectedEdges };
  };

  // Highlight logic
  const onNodeClick = useCallback((_, node: Node) => {
    const { connectedNodes } = getConnectedNodesAndEdges(node.id);

    setNodes((nds) =>
      nds.map((n) => ({
        ...n,
        style: {
          ...n.style,
          opacity: connectedNodes.has(n.id) ? 1 : 0.2,
        },
      }))
    );

    setEdges((eds) =>
      eds.map((e) => {
        const isEdgeFullyConnected = connectedNodes.has(e.source) && connectedNodes.has(e.target);
        const originalEdge = initialEdges.find(ie => ie.id === e.id);
        
        if (isEdgeFullyConnected && !e.id.startsWith('c-')) {
          return {
            ...e,
            style: {
              ...originalEdge?.style,
              stroke: '#3b82f6', // Highlight color (Blue)
              strokeWidth: 4,
              opacity: 1,
            },
            animated: false,
            markerEnd: { type: MarkerType.ArrowClosed, color: '#3b82f6' }
          };
        }

        return {
          ...e,
          style: {
            ...originalEdge?.style,
            opacity: 0.2,
          },
          markerEnd: { 
            type: MarkerType.ArrowClosed, 
            color: originalEdge?.id.startsWith('c-') ? 'rgba(203, 213, 225, 0.2)' : 'rgba(148, 163, 184, 0.2)' 
          }
        };
      })
    );
  }, [setNodes, setEdges]);

  // Reset logic
  const onPaneClick = useCallback(() => {
    setNodes((nds) =>
      nds.map((n) => ({
        ...n,
        style: {
          ...n.style,
          opacity: 1,
        },
      }))
    );

    setEdges((eds) =>
      eds.map((e) => {
        const originalEdge = initialEdges.find(ie => ie.id === e.id);
        return {
          ...e,
          style: originalEdge?.style || {},
          animated: originalEdge?.animated || false,
          markerEnd: originalEdge?.markerEnd
        };
      })
    );
  }, [setNodes, setEdges]);

  return (
    <div style={{ width: '100vw', height: '100vh', background: '#1a1a1a', position: 'relative' }}>
      {/* Navigation Header */}
      <div className="w-full p-4 z-10 flex items-center justify-between border-b border-brand-tan/20 bg-brand-dark/50 backdrop-blur-sm absolute top-0 left-0">
        {onBack ? (
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-brand-cream hover:text-brand-tan transition-colors font-bold uppercase tracking-widest text-sm"
          >
            <ArrowLeft size={20} /> Voltar
          </button>
        ) : (
          <div className="w-20"></div>
        )}
        <h1 className="text-xl font-serif font-bold text-brand-cream">Organograma Interativo</h1>
        <div className="w-20"></div>
      </div>

      {/* CSS for Marching Ants Animation */}
      <style dangerouslySetInnerHTML={{__html: `
        .marching-ants path.react-flow__edge-path {
          animation: dashdraw 1s linear infinite;
        }
        @keyframes dashdraw {
          from {
            stroke-dashoffset: 10;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
      `}} />

      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={onNodeClick}
        onPaneClick={onPaneClick}
        fitView
        minZoom={0.1}
        maxZoom={1.5}
        nodesDraggable={false}
      >
        <Background color="#333" gap={20} />
        <Controls />
      </ReactFlow>
    </div>
  );
}
