import { Card } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

export default function Home() {
 const modules = [
   {
     title: "Autenticação e Acesso",
     items: [
       {
         name: "Login",
         description: "Acesso ao sistema",
         href: "/login"
       },
       {
         name: "Verificação 2FA", 
         description: "Autenticação de dois fatores",
         href: "/2fa"
       },
       {
         name: "Recuperar Senha",
         description: "Recuperação de acesso",
         href: "/recuperar-senha"
       },
       {
         name: "Níveis de Acesso",
         description: "Gerenciamento de permissões",
         href: "/niveis-acesso"
       }
     ]
   },
   {
     title: "Onboarding e Landing",
     items: [
       {
         name: "Landing Page",
         description: "Página inicial pública",
         href: "/lp"
       },
       {
         name: "Tutorial",
         description: "Guia do sistema",
         href: "/tutorial"
       },
       {
         name: "Onboarding",
         description: "Primeiros passos",
         href: "/onboarding"
       },
       {
         name: "Cadastro Complementar",
         description: "Informações adicionais",
         href: "/cadastro/complementar"
       }
     ]
   },
   {
     title: "Gestão de Dados",
     items: [
       {
         name: "Nova Exportação",
         description: "Criar nova exportação",
         href: "/data-management/export/new"
       },
       {
         name: "Detalhes Exportação",
         description: "Visualizar exportação",
         href: "/data-management/export/1"
       },
       {
         name: "Nova Importação",
         description: "Criar nova importação",
         href: "/data-management/import/new"
       },
       {
         name: "Detalhes Importação",
         description: "Visualizar importação",
         href: "/data-management/import/1"
       },
       {
         name: "Revisar Importação",
         description: "Revisar dados importados",
         href: "/data-management/import/1/review"
       }
     ]
   },
   {
     title: "Fichas Técnicas",
     items: [
       {
         name: "Lista de Fichas",
         description: "Visualizar todas as fichas",
         href: "/fichas-tecnicas"
       },
       {
         name: "Nova Ficha",
         description: "Criar ficha técnica",
         href: "/fichas-tecnicas/new"
       },
       {
         name: "Detalhes da Ficha",
         description: "Visualizar ficha específica",
         href: "/fichas-tecnicas/1"
       },
       {
         name: "Editar Ficha",
         description: "Modificar ficha existente",
         href: "/fichas-tecnicas/1/edit"
       },
       {
         name: "Vincular Fornecedores",
         description: "Associar fornecedores",
         href: "/fichas-tecnicas/vincular"
       },
       {
         name: "Importar Fornecedores",
         description: "Importar dados de fornecedores",
         href: "/fichas-tecnicas/fornecedores/importar"
       },
       {
         name: "Histórico Fornecedor",
         description: "Histórico de fornecimento",
         href: "/fichas-tecnicas/fornecedores/1/historico"
       },
       {
         name: "Relatórios Gerais",
         description: "Relatórios de fichas técnicas",
         href: "/fichas-tecnicas/relatorios"
       },
       {
         name: "Relatórios Fornecedores",
         description: "Relatórios de fornecedores",
         href: "/fichas-tecnicas/relatorios/fornecedores"
       }
     ]
   },
   {
     title: "Planejamento e Orçamento",
     items: [
       {
         name: "Planejamento Geral",
         description: "Visão geral do planejamento",
         href: "/planejamento"
       },
       {
         name: "CMV",
         description: "Custo da Mercadoria Vendida",
         href: "/planejamento-orcamentario/1/cmv"
       },
       {
         name: "Lista de Compras",
         description: "Gestão de compras",
         href: "/planejamento-orcamentario/1/compras"
       },
       {
         name: "Nova Compra",
         description: "Registrar nova compra",
         href: "/planejamento-orcamentario/1/compras/new"
       },
       {
         name: "Editar Compra",
         description: "Modificar compra existente",
         href: "/planejamento-orcamentario/1/compras/edit"
       },
       {
         name: "Sugestões",
         description: "Sugestões de planejamento",
         href: "/planejamento-orcamentario/sugestoes"
       },
       {
         name: "Detalhes do Plano",
         description: "Visualizar plano específico",
         href: "/planejamento-orcamentario/planos/1"
       },
       {
         name: "Checkout do Plano",
         description: "Finalizar plano",
         href: "/planejamento-orcamentario/planos/1/checkout"
       }
     ]
   },
   {
     title: "Resultados e Análises",
     items: [
       {
         name: "Visão Geral",
         description: "Dashboard principal",
         href: "/results/overview"
       },
       {
         name: "Comparativo",
         description: "Análise comparativa",
         href: "/results/1/compare"
       },
       {
         name: "Detalhes do Período",
         description: "Análise detalhada do período",
         href: "/results/1/details"
       },
       {
         name: "Detalhes do Resultado",
         description: "Visualizar resultado específico",
         href: "/results/1"
       },
       {
         name: "Previsões",
         description: "Análises preditivas",
         href: "/results/forecasting"
       },
       {
         name: "Planos de Ação",
         description: "Gestão de ações",
         href: "/results/action-plans"
       }
     ]
   },
   {
     title: "Configurações e Relatórios",
     items: [
       {
         name: "Restaurante",
         description: "Configurações do estabelecimento",
         href: "/restaurante"
       },
       {
         name: "Relatórios",
         description: "Relatórios gerais do sistema",
         href: "/relatorios"
       }
     ]
   }
 ]

 return (
   <div className="min-h-screen bg-slate-50 p-8">
     <div className="max-w-7xl mx-auto space-y-8">
       <div className="flex items-center justify-between">
         <h1 className="text-3xl font-bold text-slate-900">
           Rook System - Módulo Cliente
         </h1>
       </div>

       <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
         {modules.map((module) => (
           <Card key={module.title} className="overflow-hidden">
             <div className="p-6 bg-white">
               <h2 className="text-xl font-semibold text-slate-900 mb-4">
                 {module.title}
               </h2>
               <div className="space-y-3">
                 {module.items.map((item) => (
                   <Link 
                     href={item.href} 
                     key={item.href}
                     className="block"
                   >
                     <div className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition-colors group">
                       <div>
                         <h3 className="font-medium text-slate-900">
                           {item.name}
                         </h3>
                         <p className="text-sm text-slate-500">
                           {item.description}
                         </p>
                       </div>
                       <ChevronRight className="h-5 w-5 text-slate-400 group-hover:text-slate-600 transition-colors" />
                     </div>
                   </Link>
                 ))}
               </div>
             </div>
           </Card>
         ))}
       </div>
     </div>
   </div>
 )
}