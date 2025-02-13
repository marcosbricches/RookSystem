// app/planos/tutorial/page.tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { 
  ArrowRight, 
  CheckCircle, 
  ListChecks, 
  Pause, 
  Play, 
  SkipForward, 
  Volume2 
} from "lucide-react"
import Link from "next/link"

export default function TutorialPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto py-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1 mb-4">
              <CheckCircle className="h-4 w-4" />
              <span className="text-sm font-medium">Assinatura confirmada</span>
            </div>
            <h1 className="text-3xl font-bold mb-2">
              Bem-vindo ao Rook System!
            </h1>
            <p className="text-xl text-muted-foreground">
              Assista ao vídeo de introdução para começar
            </p>
          </div>

          {/* Player de Vídeo */}
          <Card className="mb-8">
            <CardContent className="p-0">
              <div className="aspect-video bg-muted relative">
                {/* Placeholder do vídeo - em produção seria substituído pelo player real */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Play className="h-16 w-16 text-primary" />
                </div>

                {/* Controles do vídeo */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                  <div className="flex flex-col gap-2">
                    <Progress value={33} className="h-1" />
                    <div className="flex items-center gap-4 text-white">
                      <Button size="icon" variant="ghost" className="h-8 w-8 text-white hover:text-white">
                        <Play className="h-4 w-4" />
                      </Button>
                      <Button size="icon" variant="ghost" className="h-8 w-8 text-white hover:text-white">
                        <Pause className="h-4 w-4" />
                      </Button>
                      <span className="text-sm">2:15 / 6:30</span>
                      <Button size="icon" variant="ghost" className="h-8 w-8 text-white hover:text-white ml-auto">
                        <Volume2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Conteúdo do Tutorial */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <Card className="md:col-span-2">
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-4">
                  O que você vai aprender
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <ListChecks className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Configuração inicial</p>
                      <p className="text-sm text-muted-foreground">
                        Como configurar seu perfil e preferências
                      </p>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-start gap-3">
                    <ListChecks className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Gestão financeira</p>
                      <p className="text-sm text-muted-foreground">
                        Controle de fluxo de caixa e relatórios
                      </p>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-start gap-3">
                    <ListChecks className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Controle de estoque</p>
                      <p className="text-sm text-muted-foreground">
                        Gerenciamento de produtos e fornecedores
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-4">
                  Precisa de ajuda?
                </h2>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Nossa equipe está disponível para ajudar você a começar
                  </p>
                  <Button variant="outline" className="w-full">
                    Falar com suporte
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Ações */}
          <div className="flex items-center justify-between">
            <Button variant="ghost" className="gap-2">
              <SkipForward className="h-4 w-4" />
              Pular tutorial
            </Button>

            <Link href="/dashboard">
              <Button className="gap-2">
                Ir para o dashboard
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Nota de acesso posterior */}
          <p className="text-sm text-muted-foreground text-center mt-8">
            Você pode assistir este tutorial novamente a qualquer momento através do menu Ajuda
          </p>
        </div>
      </div>
    </div>
  )
}