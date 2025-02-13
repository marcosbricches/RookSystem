// src/app/data-management/import/page.tsx

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, FileSpreadsheet, Filter, Search } from "lucide-react"
import Link from "next/link"
import { Input } from "@/components/ui/input"

export default function ImportHistoryPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/data-management">
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </Button>
        <div className="flex-1">
          <h1 className="text-3xl font-bold tracking-tight">Histórico de Importações</h1>
          <p className="text-muted-foreground mt-1">
            Visualize e gerencie todas as importações realizadas
          </p>
        </div>
        <Button asChild>
          <Link href="/data-management/import/new">
            Nova Importação
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Filtros e Busca</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Buscar por nome do arquivo..." className="pl-8" />
              </div>
            </div>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Tipo de Dado" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="financial">Dados Financeiros</SelectItem>
                <SelectItem value="inventory">Compras e Estoque</SelectItem>
                <SelectItem value="employees">Funcionários</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="completed">Concluído</SelectItem>
                <SelectItem value="processing">Em Processamento</SelectItem>
                <SelectItem value="error">Erro</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Arquivo</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Data</TableHead>
                <TableHead>Registros</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                {
                  file: "dados_financeiros_jan.csv",
                  type: "Dados Financeiros",
                  date: "13/02/2024",
                  records: "150",
                  status: "completed"
                },
                {
                  file: "estoque_fev.xlsx",
                  type: "Compras e Estoque",
                  date: "12/02/2024",
                  records: "75",
                  status: "processing"
                },
                {
                  file: "funcionarios_fev.csv",
                  type: "Funcionários",
                  date: "11/02/2024",
                  records: "45",
                  status: "error"
                }
              ].map((row, i) => (
                <TableRow key={i}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <FileSpreadsheet className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">{row.file}</span>
                    </div>
                  </TableCell>
                  <TableCell>{row.type}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.records}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        row.status === "completed"
                          ? "success"
                          : row.status === "processing"
                          ? "warning"
                          : "destructive"
                      }
                    >
                      {row.status === "completed" && "Concluído"}
                      {row.status === "processing" && "Em Processamento"}
                      {row.status === "error" && "Erro"}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                      >
                        <Link href={`/data-management/import/${i}`}>
                          Detalhes
                        </Link>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}