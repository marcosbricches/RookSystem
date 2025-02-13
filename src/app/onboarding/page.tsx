// app/onboarding/page.tsx

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { CheckCircle2, Circle, PlayCircle, ArrowRight, BookOpen, Settings, FileBarChart, Building2 } from "lucide-react"
import Link from "next/link"

const OnboardingStep = ({ 
  icon: Icon, 
  title, 
  description, 
  status, 
  href 
}: {
  icon: any
  title: string
  description: string
  status: "pending" | "active" | "completed"
  href: string
}) => (
  <Link href={href}>
    <Card className={`border-0 shadow-sm hover:shadow-md transition-all cursor-pointer ${
      status === "active" ? "ring-2 ring-primary ring-offset-2" : ""
    }`}>
      <CardContent className="p-6">
        <div className="flex gap-4">
          <div className={`p-2 rounded-lg ${
            status === "completed" ? "bg-green-50" : 
            status === "active" ? "bg-primary/10" : 
            "bg-gray-50"
          }`}>
            <Icon className={`h-6 w-6 ${
              status === "completed" ? "text-green-600" : 
              status === "active" ? "text-primary" : 
              "text-gray-400"
            }`} />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <h3 className="font-medium text-gray-900">{title}</h3>
              {status === "completed" && <CheckCircle2 className="h-5 w-5 text-green-600" />}
              {status === "active" && <Circle className="h-5 w-5 text-primary" />}
              {status === "pending" && <Circle className="h-5 w-5 text-gray-300" />}
            </div>
            <p className="text-sm text-gray-500">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  </Link>
)

export default function OnboardingPage() {
  // Simular progresso (viria do backend)
  const progress = 25

  const steps = [
    {
      icon: Building2,
      title: "Configure seu Restaurante",
      description: "Complete as informações básicas do seu estabelecimento",
      status: "completed" as const,
      href: "/onboarding/restaurante"
    },
    {
      icon: Settings,
      title: "Configurações Iniciais",
      description: "Defina as principais configurações do sistema",
      status: "active" as const,
      href: "/onboarding/configuracoes"
    },
    {
      icon: FileBarChart,
      title: "Planejamento Orçamentário",
      description: "Configure seu primeiro planejamento financeiro",
      status: "pending" as const,
      href: "/onboarding/planejamento"
    },
    {
      icon: BookOpen,
      title: "Conheça os Relatórios",
      description: "Explore os principais relatórios disponíveis",
      status: "pending" as const,
      href: "/onboarding/relatorios"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Cabeçalho */}
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">
              Bem-vindo ao Rook System
            </h1>
            <p className="mt-2 text-gray-600">
              Vamos ajudar você a configurar tudo para começar
            </p>
          </div>

          {/* Barra de Progresso */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="pb-4">
              <div className="flex justify-between items-center">
                <CardTitle>Seu Progresso</CardTitle>
                <span className="text-sm font-medium text-gray-600">
                  {progress}% completo
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <Progress value={progress} className="h-2" />
            </CardContent>
          </Card>

          {/* Lista de Etapas */}
          <div className="space-y-4">
            {steps.map((step, index) => (
              <OnboardingStep key={index} {...step} />
            ))}
          </div>

          {/* Vídeo Tutorial */}
          <Card className="border-0 shadow-lg bg-primary/5">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <PlayCircle className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">
                    Tour pelo Sistema
                  </h3>
                  <p className="text-sm text-gray-500">
                    Assista nosso vídeo de introdução ao Rook System
                  </p>
                </div>
                <Button variant="outline" className="gap-2">
                  Assistir Agora
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Ajuda */}
          <p className="text-center text-sm text-gray-500">
            Precisa de ajuda?{" "}
            <button className="text-primary hover:underline">
              Fale com nosso suporte
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}