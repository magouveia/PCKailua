import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ZoomIn, ZoomOut, Maximize, Plus, Minus } from 'lucide-react';

interface OrgNode {
  title: string;
  roles?: string[];
  color: string;
  children?: OrgNode[];
  isCoLeaders?: boolean;
  leaders?: string[];
  sideNode?: OrgNode;
  sideNodeLeft?: OrgNode;
  sideNodeLeftOffset?: string;
  sideNodeRight?: OrgNode;
  sideNodeRightOffset?: string;
  staffNode?: OrgNode;
  noBorderTop?: boolean;
  fontWeight?: string;
  isHidden?: boolean;
  width?: string;
  alignCard?: 'center' | 'start' | 'end';
  marginLeft?: string;
  marginRight?: string;
  offsetY?: string;
  isGhostNode?: boolean;
  hideChildrenLines?: boolean;
  childrenContainerClass?: string;
}

const organogramData: OrgNode = {
  title: "Direção Geral",
  color: "border-[#C49874]",
  isCoLeaders: true,
  leaders: ["Sara", "Carlos"],
  hideChildrenLines: true,
  sideNodeLeft: {
    title: "Direção de Manutenção",
    color: "border-[#C49874]",
    roles: [
      "Chefe de Manutenção e Serviços Técnicos",
      "Chefe de Manutenção",
      "Carpinteiro em Geral de 1ª",
      "Carpinteiro em Geral de 2ª",
      "Ajudante"
    ]
  },
  childrenContainerClass: "flex-col items-center gap-8",
  children: [
    {
      title: "Top Row",
      isGhostNode: true,
      hideChildrenLines: true,
      childrenContainerClass: "gap-8",
      children: [
        {
          title: "Direção RH",
          color: "border-[#C49874]",
        },
        {
          title: "Direção Operacional",
          color: "border-[#C49874]",
          roles: ["Dir. Restauração e Bebidas", "Assistente de Direção"],
        },
        {
          title: "Escriturária",
          color: "border-transparent",
          noBorderTop: true,
          fontWeight: "font-normal",
        },
        {
          title: "Dir. Serviços Administrativos\ne Financeiros",
          color: "border-[#C49874]",
        }
      ]
    },
    {
      title: "Bottom Row",
      isGhostNode: true,
      hideChildrenLines: true,
      childrenContainerClass: "gap-8",
      children: [
        {
          title: "Cozinha",
          color: "border-[#C49874]",
          roles: [
            "Chefe de Cozinha",
            "Subchefe de Cozinha",
            "Cozinheiro de 1ª",
            "Cozinheiro de 2ª / Pizzaiolo",
            "Cozinheiro de 3ª",
            "Ajudante"
          ],
          sideNodeRight: {
            title: "Copa",
            color: "border-[#C49874]",
            roles: [
              "Chefe de Copa",
              "Copeira Sénior",
              "Copeira Júnior"
            ]
          }
        },
        {
          title: "Spacer",
          color: "border-transparent",
          isHidden: true,
          width: "min-w-[280px]"
        },
        {
          title: "Armazém",
          color: "border-[#C49874]",
          roles: [
            "Encarregado de Armazém",
            "Fiel de Armazém",
            "Assistente de Armazém",
            "Ajudante"
          ]
        },
        {
          title: "Operação da Frente",
          color: "border-[#C49874]",
          roles: ["Supervisor de Operações"],
          children: [
            {
              title: "Bar",
              color: "border-[#C49874]",
              roles: [
                "Chefe de Bar",
                "Barman de 1ª",
                "Barman de 2ª",
                "Ajudante"
              ]
            },
            {
              title: "Mesas",
              color: "border-[#C49874]",
              roles: [
                "Gerente de Sala",
                "Subchefe de Sala",
                "Assistente de Sala de 1ª",
                "Assistente de Sala de 2ª",
                "Assistente de Sala Júnior",
                "Ajudante"
              ],
              sideNodeRight: {
                title: "Limpeza",
                color: "border-[#C49874]",
                roles: [
                  "Encarregado de Limpeza",
                  "Técnico de Limpeza"
                ]
              },
              sideNodeRightOffset: "top-16"
            }
          ]
        },
        {
          title: "Spacer",
          color: "border-transparent",
          isHidden: true,
          width: "min-w-[280px]"
        },
        {
          title: "Comercial",
          color: "border-[#C49874]",
          roles: [
            "Gerente Comercial",
            "Subgerente Comercial",
            "Assistente de Vendas de 1ª",
            "Assistente de Vendas de 2ª",
            "Ajudante"
          ]
        }
      ]
    }
  ]
};

const TreeNode: React.FC<{ node: OrgNode; depth?: number }> = ({ node, depth = 0 }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const hasChildren = node.children && node.children.length > 0;

  let firstVisibleIdx = -1;
  let lastVisibleIdx = -1;
  if (hasChildren) {
    firstVisibleIdx = node.children!.findIndex(c => !c.isHidden);
    for (let i = node.children!.length - 1; i >= 0; i--) {
      if (!node.children![i].isHidden) {
        lastVisibleIdx = i;
        break;
      }
    }
  }

  if (node.isHidden) {
    return <div className={`${node.width || 'min-w-[160px]'}`}></div>;
  }

  if (node.isGhostNode) {
    return (
      <div className={`flex flex-col items-center relative ${node.marginLeft || ''} ${node.marginRight || ''} ${node.width || 'w-full'}`}>
        {hasChildren && !isCollapsed && (
          <div className="flex flex-col items-center relative w-full">
            <div className={`flex justify-center relative w-full ${node.childrenContainerClass || ''}`}>
              {node.children!.map((child, idx) => (
                <div key={idx} className={`flex flex-col items-center relative pt-12 px-2 md:px-3 ${child.marginLeft || ''} ${child.marginRight || ''}`}>
                  {/* Vertical line to child */}
                  {!child.isHidden && <div className="absolute top-0 w-px h-12 bg-transparent"></div>}
                  
                  {/* Horizontal line connecting children */}
                  {node.children!.length > 1 && firstVisibleIdx !== lastVisibleIdx && idx >= firstVisibleIdx && idx <= lastVisibleIdx && (
                    <div 
                      className="absolute top-0 h-px bg-transparent"
                      style={{
                        left: idx === firstVisibleIdx ? '50%' : '0',
                        right: idx === lastVisibleIdx ? '50%' : '0',
                        width: idx === firstVisibleIdx || idx === lastVisibleIdx ? '50%' : '100%'
                      }}
                    ></div>
                  )}
                  <TreeNode node={child} depth={depth + 1} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  const alignmentClass = node.alignCard === 'end' ? 'items-end' : node.alignCard === 'start' ? 'items-start' : 'items-center';

  return (
    <div className={`flex flex-col ${alignmentClass} relative`}>
      {/* Node Card Container */}
      <div className="relative flex items-start justify-center">
        {/* Side Node Left */}
        {node.sideNodeLeft && (
          <div className={`absolute right-full ${node.sideNodeLeftOffset || 'top-0'} pr-8 flex items-start z-10`}>
            <TreeNode node={node.sideNodeLeft} depth={depth} />
            {/* Horizontal line connecting side node to vertical trunk */}
            <div className="absolute right-0 top-8 w-8 h-px bg-transparent"></div>
          </div>
        )}

        {/* Side Node (Staff) - Legacy, maps to right for now or keep as is */}
        {node.sideNode && (
          <div className="absolute right-full top-0 pr-8 flex items-start z-10">
            <TreeNode node={node.sideNode} depth={depth} />
            {/* Horizontal line connecting side node to vertical trunk */}
            <div className="absolute right-0 top-8 w-8 h-px bg-transparent"></div>
          </div>
        )}
        
        {/* Side Node Right */}
        {node.sideNodeRight && (
          <div className={`absolute left-full ${node.sideNodeRightOffset || 'top-0'} pl-8 flex items-start z-10`}>
            <TreeNode node={node.sideNodeRight} depth={depth} />
            {/* Horizontal line connecting side node to vertical trunk */}
            <div className="absolute left-0 top-8 w-8 h-px bg-transparent"></div>
          </div>
        )}
        
        {/* Node Card */}
        {node.isCoLeaders && node.leaders ? (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`
            relative z-10 flex flex-col items-center p-0 rounded-xl shadow-md bg-white
            ${node.noBorderTop ? '' : 'border-t-4'} ${node.color} w-[220px] transition-all hover:shadow-xl hover:-translate-y-1
            ${node.offsetY || ''}
          `}
        >
          {/* Shared Title */}
          <div className="px-4 py-2 w-full text-center border-b border-brand-stone/10 bg-[#E7DDD3] rounded-t-xl">
            <h3 className={`${node.fontWeight || 'font-bold'} text-brand-dark text-sm whitespace-pre-line`}>
              {node.title}
            </h3>
          </div>

          {/* Separated Leaders */}
          <div className="flex w-full bg-white rounded-b-xl">
            {node.leaders.map((leader, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && <div className="w-px bg-brand-stone/20"></div>}
                <div className="p-3 flex-1 flex flex-col items-center justify-center">
                  <span className="font-bold text-brand-dark text-xs">{leader}</span>
                </div>
              </React.Fragment>
            ))}
          </div>

          {/* Collapse Button */}
          {(hasChildren || node.sideNode || node.staffNode) && (
            <button 
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="absolute -bottom-3 bg-white border border-brand-stone/20 rounded-full p-0.5 shadow-sm hover:bg-brand-tan hover:text-white transition-colors z-20"
            >
              {isCollapsed ? <Plus size={14} /> : <Minus size={14} />}
            </button>
          )}

          {/* Vertical line from parent dropping down */}
          {(hasChildren || node.staffNode) && !isCollapsed && !node.hideChildrenLines && (
            <div className="absolute -bottom-20 w-px h-20 bg-transparent left-1/2 -translate-x-1/2">
              {node.staffNode && (
                <div className="absolute right-full top-1/2 -translate-y-8 pr-8 flex items-start z-10">
                  <TreeNode node={node.staffNode} depth={depth + 1} />
                  {/* Horizontal line connecting staff node to vertical trunk */}
                  <div className="absolute right-0 top-8 w-8 h-px bg-transparent"></div>
                </div>
              )}
            </div>
          )}
        </motion.div>
      ) : (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`
            relative z-10 flex flex-col items-center p-0 rounded-xl shadow-md bg-white
            ${node.noBorderTop ? '' : 'border-t-4'} ${node.color} w-[220px] transition-all hover:shadow-xl hover:-translate-y-1
            ${node.offsetY || ''}
          `}
        >
          {/* Title */}
          <div className={`px-4 py-2 w-full text-center bg-[#E7DDD3] ${(!node.roles || node.roles.length === 0) ? 'rounded-xl' : 'border-b border-brand-stone/10 rounded-t-xl'}`}>
            <h3 className={`${node.fontWeight || 'font-bold'} text-brand-dark text-sm whitespace-pre-line`}>
              {node.title}
            </h3>
          </div>

          {/* Roles */}
          {node.roles && node.roles.length > 0 && (
            <div className="p-2 w-full bg-white rounded-b-xl flex flex-col items-center space-y-1.5">
              {node.roles.map((role, idx) => (
                <div key={idx} className="flex flex-col items-center w-full">
                  {idx > 0 && <div className="w-px h-2 bg-brand-stone/20 my-0.5"></div>}
                  <span className={`text-xs text-center leading-tight ${idx === 0 ? 'font-bold text-brand-dark' : 'text-brand-stone font-medium'}`}>
                    {role}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Collapse Button */}
          {(hasChildren || node.sideNode || node.staffNode) && (
            <button 
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="absolute -bottom-3 bg-white border border-brand-stone/20 rounded-full p-0.5 shadow-sm hover:bg-brand-tan hover:text-white transition-colors z-20"
            >
              {isCollapsed ? <Plus size={14} /> : <Minus size={14} />}
            </button>
          )}

          {/* Vertical line from parent dropping down */}
          {(hasChildren || node.staffNode) && !isCollapsed && !node.hideChildrenLines && (
            <div className="absolute -bottom-20 w-px h-20 bg-transparent left-1/2 -translate-x-1/2">
              {node.staffNode && (
                <div className="absolute right-full top-1/2 -translate-y-8 pr-8 flex items-start z-10">
                  <TreeNode node={node.staffNode} depth={depth + 1} />
                  {/* Horizontal line connecting staff node to vertical trunk */}
                  <div className="absolute right-0 top-8 w-8 h-px bg-transparent"></div>
                </div>
              )}
            </div>
          )}
        </motion.div>
      )}
      </div>

      {/* Children & Side Node */}
      {hasChildren && !isCollapsed && (
        <div className="flex flex-col items-center mt-20 relative w-full">
          {/* Custom Drop Lines for Co-Leaders */}
          {node.isCoLeaders && node.hideChildrenLines && (
            <div className="absolute -top-20 left-0 w-full h-20 pointer-events-none z-0">
              {/* Sara's lines: Drop straight down to Operacional, branch left to RH */}
              <div className="absolute top-0 w-px h-20 bg-transparent" style={{ left: 'calc(50% - 55px)' }}></div>
              <div className="absolute top-10 h-px bg-transparent" style={{ left: 'calc(50% - 307px)', width: '252px' }}></div>
              <div className="absolute top-10 w-px h-10 bg-transparent" style={{ left: 'calc(50% - 307px)' }}></div>

              {/* Carlos's lines: Drop straight down to Escriturária, branch right to Dir. Serviços */}
              <div className="absolute top-0 w-px h-20 bg-transparent" style={{ left: 'calc(50% + 55px)' }}></div>
              <div className="absolute top-10 h-px bg-transparent" style={{ left: 'calc(50% + 55px)', width: '252px' }}></div>
              <div className="absolute top-10 w-px h-10 bg-transparent" style={{ left: 'calc(50% + 307px)' }}></div>
            </div>
          )}

          <div className="flex justify-center relative w-full">
            {node.children!.map((child, idx) => (
              <div key={idx} className={`flex flex-col items-center relative pt-12 px-2 md:px-3 ${child.marginLeft || ''} ${child.marginRight || ''}`}>
                {/* Vertical line to child */}
                {!child.isHidden && !node.hideChildrenLines && <div className="absolute top-0 w-px h-12 bg-transparent"></div>}
                
                {/* Horizontal line connecting children */}
                {!node.hideChildrenLines && node.children!.length > 1 && firstVisibleIdx !== lastVisibleIdx && idx >= firstVisibleIdx && idx <= lastVisibleIdx && (
                  <div 
                    className="absolute top-0 h-px bg-transparent"
                    style={{
                      left: idx === firstVisibleIdx ? '50%' : '0',
                      right: idx === lastVisibleIdx ? '50%' : '0',
                      width: idx === firstVisibleIdx || idx === lastVisibleIdx ? '50%' : '100%'
                    }}
                  ></div>
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

interface OrganogramViewProps {
  onBack: () => void;
}

export const OrganogramView: React.FC<OrganogramViewProps> = ({ onBack }) => {
  const [scale, setScale] = useState(1);

  const handleZoomIn = () => setScale(prev => Math.min(prev + 0.2, 3));
  const handleZoomOut = () => setScale(prev => Math.max(prev - 0.2, 0.5));
  const handleReset = () => setScale(1);

  return (
    <div className="flex flex-col h-screen bg-brand-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-brand-dark via-transparent to-brand-dark pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-brand-stone/20 bg-white shadow-sm z-20 relative">
        <div className="flex items-center gap-4">
          <button 
            onClick={onBack}
            className="p-2 hover:bg-brand-stone/10 rounded-full transition-colors text-brand-stone hover:text-brand-dark"
            title="Voltar"
          >
            <ArrowLeft size={24} />
          </button>
          <h2 className="text-xl font-bold text-brand-dark">Organograma</h2>
        </div>
        
        <div className="flex items-center gap-2 bg-brand-stone/5 p-1 rounded-lg border border-brand-stone/10">
          <button 
            onClick={handleZoomOut}
            className="p-2 hover:bg-white rounded-md transition-colors text-brand-stone hover:text-brand-dark shadow-sm"
            title="Reduzir"
          >
            <ZoomOut size={20} />
          </button>
          <button 
            onClick={handleReset}
            className="p-2 hover:bg-white rounded-md transition-colors text-brand-stone hover:text-brand-dark shadow-sm"
            title="Tamanho Original"
          >
            <Maximize size={20} />
          </button>
          <button 
            onClick={handleZoomIn}
            className="p-2 hover:bg-white rounded-md transition-colors text-brand-stone hover:text-brand-dark shadow-sm"
            title="Ampliar"
          >
            <ZoomIn size={20} />
          </button>
          <div className="px-3 py-1 text-sm font-medium text-brand-stone border-l border-brand-stone/20">
            {Math.round(scale * 100)}%
          </div>
        </div>
      </div>

      {/* Canvas Area */}
      <div className="flex-1 overflow-auto relative z-10">
        <div className="min-h-full min-w-max w-full flex items-center justify-center p-16">
          <div 
            className="transition-transform duration-200 ease-out origin-top"
            style={{ transform: `scale(${scale})` }}
          >
            <TreeNode node={organogramData} />
          </div>
        </div>
      </div>
    </div>
  );
};
