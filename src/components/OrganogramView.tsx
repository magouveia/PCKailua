import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ZoomIn, ZoomOut, Maximize, Minus, Plus } from 'lucide-react';

interface OrganogramViewProps {
  onBack: () => void;
}

interface OrgNodeData {
  title: string;
  roles: (string | string[])[];
  children?: OrgNodeData[];
  sideChildren?: { node: OrgNodeData; attachToRoleIndex: number }[];
  color: string;
  collapsed?: boolean;
  connectorHeight?: string;
  topSpacing?: string;
}

const treeData: OrgNodeData = {
  title: "Direção Geral",
  roles: [["Dir. Geral", "Dir. Financeiro"]],
  color: "border-[#c49874] bg-brand-dark/5",
  children: [
    {
      title: "Direção Manutenção",
      roles: [
        "Chefe de Manutenção e Serviços Técnicos",
        "Chefe de Manutenção",
        "Carpinteiro em geral de 1ª",
        "Carpinteiro em geral de 2ª",
        "Ajudante"
      ],
      color: "border-[#c49874] bg-brand-dark/5",
    },
    {
      title: "Direção Operacional",
      roles: ["Dir. Restauração e Bebidas", "Assistente de Direção"],
      color: "border-[#c49874] bg-brand-dark/5",
      children: [
        {
          title: "Cozinha",
          roles: [
            "Chefe de Cozinha",
            "Subchefe de Cozinha",
            "Cozinheiro de 1ª",
            "Cozinheiro de 2ª / Pizzaiolo",
            "Cozinheiro de 3ª",
            "Ajudante"
          ],
          color: "border-[#c49874] bg-brand-dark/5",
          children: [
            {
              title: "Copa",
              roles: ["Chefe de Copa", "Copeiro Sénior", "Copeiro Júnior"],
              color: "border-[#c49874] bg-brand-dark/5",
              connectorHeight: "h-6",
              topSpacing: "pt-6"
            }
          ]
        },
        {
          title: "Armazém",
          roles: [
            "Encarregado de Armazém",
            "Fiel de Armazém",
            "Assistente de Armazém",
            "Ajudante"
          ],
          color: "border-[#c49874] bg-brand-dark/5",
        },
        {
          title: "Operação da Frente",
          roles: ["Supervisora de Operações"],
          color: "border-[#c49874] bg-brand-dark/5",
          children: [
            {
              title: "Bar",
              roles: [
                "Chefe de Bar",
                "Barman de 1ª",
                "Barman de 2ª",
                "Ajudante"
              ],
              color: "border-[#c49874] bg-brand-dark/5",
            },
            {
              title: "Mesas",
              roles: [
                "Gerente de Sala",
                "Subchefe de Sala",
                "Assistente de Sala de 1ª",
                "Assistente de Sala de 2ª",
                "Assistente de Sala Júnior",
                "Ajudante"
              ],
              color: "border-[#c49874] bg-brand-dark/5",
              sideChildren: [
                {
                  node: {
                    title: "Limpeza",
                    roles: ["Encarregado de Limpeza", "Técnico de Limpeza"],
                    color: "border-[#c49874] bg-brand-dark/5",
                  },
                  attachToRoleIndex: 1
                }
              ]
            }
          ]
        },
        {
          title: "Comercial",
          roles: [
            "Gerente Comercial",
            "Subgerente Comercial",
            "Assistente de Vendas de 1ª",
            "Assistente de Vendas de 2ª",
            "Ajudante"
          ],
          color: "border-[#c49874] bg-brand-dark/5",
        }
      ]
    },
    {
      title: "Direção Corporativa",
      roles: [
        ["Dir. Serv. Admin. e Financeiros", "Dir. RH"],
        "Escriturária de 1ª"
      ],
      color: "border-[#c49874] bg-brand-dark/5",
    }
  ]
};

const TreeNode: React.FC<{ node: OrgNodeData; depth?: number }> = ({ node, depth = 0 }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const hasChildren = node.children && node.children.length > 0;
  const hasRows = node.roles.some(r => Array.isArray(r));

  return (
    <div className="flex flex-col items-center">
      {/* Node Card */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className={`
          relative z-10 flex flex-col items-center p-0 rounded-xl shadow-md border-t-4 
          ${node.color} ${hasRows ? 'min-w-[240px] max-w-none' : 'min-w-[160px] max-w-[200px]'} transition-all hover:shadow-xl hover:-translate-y-1
        `}
      >
        <div className="w-full p-3 text-center font-serif font-bold text-sm border-b border-black/5 text-brand-dark">
          {node.title}
        </div>
        <div className="p-3 w-full bg-white/80 backdrop-blur-sm rounded-b-xl">
          <div className="flex flex-col items-center space-y-2">
            {node.roles.map((roleItem, idx) => {
              const sideChild = node.sideChildren?.find(c => c.attachToRoleIndex === idx);
              
              if (Array.isArray(roleItem)) {
                return (
                  <div key={idx} className="flex flex-row justify-center gap-2 relative">
                    {idx > 0 && <div className="w-px h-2 bg-brand-stone/30 absolute -top-2 left-1/2 -translate-x-1/2"></div>}
                    {roleItem.map((role, rIdx) => (
                      <div key={rIdx} className="flex flex-col items-center relative">
                        {rIdx > 0 && <div className="w-px h-full bg-brand-stone/30 absolute -left-2 top-0"></div>}
                        <span className={`text-xs text-center leading-tight ${idx === 0 && rIdx === 0 ? 'font-bold text-brand-dark' : 'text-brand-stone font-medium'}`}>
                          {role}
                        </span>
                      </div>
                    ))}
                  </div>
                );
              }
              return (
                <div key={idx} className="flex flex-col items-center relative w-full">
                  {idx > 0 && <div className="w-px h-2 bg-brand-stone/30 absolute -top-2"></div>}
                  <span className={`text-xs text-center leading-tight ${idx === 0 ? 'font-bold text-brand-dark' : 'text-brand-stone font-medium'}`}>
                    {roleItem}
                  </span>
                  
                  {/* Side Children Rendering */}
                  {sideChild && (
                    <div className="absolute left-full top-1/2 flex items-start z-0">
                      {/* Horizontal line from role */}
                      <div className="w-28 h-px bg-brand-stone/40 mt-px"></div>
                      {/* Vertical line down and node */}
                      <div className="relative">
                        <div className="absolute left-0 top-0 w-px h-8 bg-brand-stone/40"></div>
                        <div className="absolute top-8 left-0 -translate-x-1/2">
                           <TreeNode node={sideChild.node} depth={depth + 1} />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        
        {hasChildren && (
          <button 
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="absolute -bottom-3 bg-white border border-brand-stone/20 rounded-full p-0.5 shadow-sm hover:bg-brand-tan hover:text-white transition-colors z-20"
          >
            {isCollapsed ? <Plus size={14} /> : <Minus size={14} />}
          </button>
        )}
      </motion.div>

      {/* Children */}
      {node.children && node.children.length > 0 && !isCollapsed && (
        <div className="flex flex-col items-center">
          {/* Vertical line from parent */}
          <div className="w-px h-16 bg-brand-stone/40"></div>
          
          {/* Horizontal connector wrapper */}
          <div className="flex relative">
            {node.children!.map((child, index) => (
              <div key={index} className={`flex flex-col items-center px-2 relative ${child.topSpacing || 'pt-12'}`}>
                {/* Vertical line to child */}
                <div className={`absolute top-0 w-px ${child.connectorHeight || 'h-12'} bg-brand-stone/40`}></div>
                
                {/* Horizontal line connecting children */}
                {node.children!.length > 1 && (
                  <div className={`absolute top-0 h-px bg-brand-stone/40 
                    ${index === 0 ? 'left-1/2 w-1/2' : ''} 
                    ${index === node.children!.length - 1 ? 'right-1/2 w-1/2' : ''}
                    ${index > 0 && index < node.children!.length - 1 ? 'w-full left-0' : ''}
                  `}></div>
                )}

                <TreeNode node={child} depth={depth + 1} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export const OrganogramView: React.FC<OrganogramViewProps> = ({ onBack }) => {
  const [scale, setScale] = useState(1);

  const handleZoomIn = () => setScale(prev => Math.min(prev + 0.1, 1.5));
  const handleZoomOut = () => setScale(prev => Math.max(prev - 0.1, 0.5));
  const handleReset = () => setScale(1);

  return (
    <div className="h-screen bg-brand-cream flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-brand-dark text-brand-cream p-4 shadow-lg z-20 flex items-center justify-between shrink-0">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 hover:text-brand-tan transition-colors font-sans uppercase tracking-wider text-sm"
        >
          <ChevronLeft size={20} /> Voltar
        </button>
        <h1 className="text-xl font-serif font-bold hidden md:block">Estrutura Organizacional</h1>
        <div className="flex gap-2">
          <button onClick={handleZoomOut} className="p-2 hover:bg-white/10 rounded-full" title="Diminuir Zoom"><ZoomOut size={20} /></button>
          <button onClick={handleReset} className="p-2 hover:bg-white/10 rounded-full" title="Reset Zoom"><Maximize size={20} /></button>
          <button onClick={handleZoomIn} className="p-2 hover:bg-white/10 rounded-full" title="Aumentar Zoom"><ZoomIn size={20} /></button>
        </div>
      </div>

      {/* Canvas */}
      <div className="flex-1 overflow-auto cursor-grab active:cursor-grabbing bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
        <div 
          className="min-w-max min-h-full p-20 flex justify-center origin-top transition-transform duration-200 ease-out"
          style={{ transform: `scale(${scale})` }}
        >
          <TreeNode node={treeData} />
        </div>
      </div>
    </div>
  );
};
