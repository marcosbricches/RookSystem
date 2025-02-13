// src/app/data-management/export/[id]/page.tsx

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Download, FileText, ChartBar, Calendar, Settings2, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function ExportDetailsPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/data-management/export">
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </Button>
        <div className="flex-1">
          <h1 className="text-3xl font-bold tracking-tight">Detalhes da Exportação</h1>
          <p className="text-muted-foreground mt-1">
            Relatório Financeiro - Janeiro 2024
          </p>
        </div>
        <div className="flex gap-3">
          <Button>
            <Download className="h-4 w-4 mr-2" />
            Baixar Relatório
          </Button>
          <Button variant="outline" asChild>
            <Link href="/data-management/export/new">
              Nova Exportação
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Prévia do Relatório</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg border bg-muted/50 p-8 text-center space-y-4">
                <FileText className="h-12 w-12 mx-auto text-muted-foreground" />
                <div>
                  <p className="font-medium">Relatório Financeiro - Janeiro 2024.pdf</p>
                  <p className="text-sm text-muted-foreground mt-1">2.5 MB • PDF</p>
                </div>
                <Button>
                  <Download className="h-4 w-4 mr-2" />
                  Baixar Arquivo
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Configurações Utilizadas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <ChartBar className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Tipo de Relatório</p>
                      <p className="text-sm text-muted-foreground">Relatório Financeiro</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Período</p>
                      <p className="text-sm text-muted-foreground">01/01/2024 - 31/01/2024</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Settings2 className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Formato</p>
                      <p className="text-sm text-muted-foreground">PDF</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Campos Incluídos</p>
                      <p className="text-sm text-muted-foreground">Data, Valor, Categoria, Descrição</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t">
                <h3 className="font-medium mb-3">Filtros Aplicados</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Período: Janeiro 2024</Badge>
                  <Badge variant="secondary">Categoria: Todas</Badge>
                  <Badge variant="secondary">Agrupamento: Diário</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Informações da Exportação</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Status:</span>
                  <Badge variant="success">Concluído</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Data de Geração:</span>
                  <span className="font-medium">13/02/2024 10:30</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Tamanho:</span>
                  <span className="font-medium">2.5 MB</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Downloads:</span>
                  <span className="font-medium">3</span>
                </div>
              </div>

              <div className="space-y-2 pt-4">
                <h3 className="font-semibold mb-2">Etapas Concluídas</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Configuração do relatório</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Processamento dos dados</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Geração do arquivo</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <FileText className="h-5 w-5" />
                <p>Este relatório estará disponível para download por 30 dias</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}