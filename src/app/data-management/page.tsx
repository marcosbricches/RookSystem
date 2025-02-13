// src/app/data-management/page.tsx

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, Download, Clock, AlertCircle } from "lucide-react"
import Link from "next/link"

export default function DataManagementPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Gerenciamento de Dados</h1>
          <p className="text-muted-foreground mt-1">
            Importe e exporte dados do seu restaurante
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Card de Importação */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="h-5 w-5" />
              Importação de Dados
            </CardTitle>
            <CardDescription>
              Importe dados financeiros, estoque e folha de pagamento
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                Última importação: 2 horas atrás
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <AlertCircle className="h-4 w-4" />
                3 importações pendentes de revisão
              </div>
            </div>
            <div className="flex gap-3">
              <Button asChild>
                <Link href="/data-management/import/new">Nova Importação</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/data-management/import">Ver Histórico</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Card de Exportação */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Download className="h-5 w-5" />
              Exportação de Dados
            </CardTitle>
            <CardDescription>
              Exporte relatórios financeiros, estoque e desempenho
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                Última exportação: 1 dia atrás
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <AlertCircle className="h-4 w-4" />
                5 relatórios disponíveis para exportação
              </div>
            </div>
            <div className="flex gap-3">
              <Button asChild>
                <Link href="/data-management/export/new">Nova Exportação</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/data-management/export">Ver Histórico</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Seção de Atividades Recentes */}
      <Card>
        <CardHeader>
          <CardTitle>Atividades Recentes</CardTitle>
          <CardDescription>
            Últimas operações de importação e exportação
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Lista de atividades */}
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  {i % 2 === 0 ? (
                    <Upload className="h-5 w-5 text-muted-foreground" />
                  ) : (
                    <Download className="h-5 w-5 text-muted-foreground" />
                  )}
                  <div>
                    <p className="font-medium">
                      {i % 2 === 0
                        ? "Importação de dados financeiros"
                        : "Exportação de relatório de estoque"}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Realizado há {i} horas
                    </p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" asChild>
                  <Link
                    href={`/data-management/${
                      i % 2 === 0 ? "import" : "export"
                    }/${i}`}
                  >
                    Ver detalhes
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}