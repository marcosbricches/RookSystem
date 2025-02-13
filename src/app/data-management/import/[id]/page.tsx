// src/app/data-management/import/[id]/page.tsx

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, FileSpreadsheet, CheckCircle, AlertTriangle, XCircle, Download } from "lucide-react"
import Link from "next/link"

export default function ImportDetailsPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/data-management/import">
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </Button>
        <div className="flex-1">
          <h1 className="text-3xl font-bold tracking-tight">Detalhes da Importação</h1>
          <p className="text-muted-foreground mt-1">
            dados_financeiros_jan.csv
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Baixar Log
          </Button>
          <Button variant="outline" asChild>
            <Link href="/data-management/import/new">
              Nova Importação
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Dados Importados</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Data</TableHead>
                    <TableHead>Valor</TableHead>
                    <TableHead>Categoria</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { status: "success" },
                    { status: "warning" },
                    { status: "error" },
                  ].map((row, i) => (
                    <TableRow key={i}>
                      <TableCell>2024-02-{13 - i}</TableCell>
                      <TableCell>R$ {1000 * (i + 1)},00</TableCell>
                      <TableCell>Categoria {i + 1}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {row.status === "success" && (
                            <CheckCircle className="h-4 w-4 text-green-500" />
                          )}
                          {row.status === "warning" && (
                            <AlertTriangle className="h-4 w-4 text-yellow-500" />
                          )}
                          {row.status === "error" && (
                            <XCircle className="h-4 w-4 text-red-500" />
                          )}
                          <span className="text-sm text-muted-foreground">
                            {row.status === "success" && "Importado com sucesso"}
                            {row.status === "warning" && "Dados inconsistentes"}
                            {row.status === "error" && "Erro na importação"}
                          </span>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Log de Processamento</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-sm">
                {[
                  { time: "10:30:15", type: "info", message: "Iniciando processamento do arquivo" },
                  { time: "10:30:16", type: "success", message: "150 linhas identificadas" },
                  { time: "10:30:18", type: "warning", message: "Dados inconsistentes na linha 45" },
                  { time: "10:30:20", type: "error", message: "Erro ao processar linha 75" },
                  { time: "10:30:22", type: "info", message: "Processamento finalizado" }
                ].map((log, i) => (
                  <div key={i} className="flex items-start gap-3 p-2 rounded hover:bg-muted/50">
                    <span className="text-muted-foreground whitespace-nowrap">{log.time}</span>
                    <div className="flex items-center gap-2 flex-1">
                      {log.type === "success" && <CheckCircle className="h-4 w-4 text-green-500" />}
                      {log.type === "warning" && <AlertTriangle className="h-4 w-4 text-yellow-500" />}
                      {log.type === "error" && <XCircle className="h-4 w-4 text-red-500" />}
                      {log.type === "info" && <FileSpreadsheet className="h-4 w-4 text-blue-500" />}
                      <span>{log.message}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Informações da Importação</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Arquivo:</span>
                  <span className="font-medium">dados_financeiros_jan.csv</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Tipo:</span>
                  <span className="font-medium">Dados Financeiros</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Data:</span>
                  <span className="font-medium">13/02/2024 10:30</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Registros:</span>
                  <span className="font-medium">150 linhas</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Status:</span>
                  <Badge variant="warning">Parcialmente Concluído</Badge>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <h3 className="font-semibold">Resumo do Processamento</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>125 registros processados com sucesso</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <AlertTriangle className="h-4 w-4 text-yellow-500" />
                    <span>20 registros com inconsistências</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <XCircle className="h-4 w-4 text-red-500" />
                    <span>5 registros com erro</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 text-sm">
                <AlertTriangle className="h-5 w-5 text-yellow-500" />
                <p className="text-muted-foreground">
                  Existem registros que precisam de atenção. Revise os dados e faça as correções necessárias.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}