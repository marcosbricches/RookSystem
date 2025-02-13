// src/app/fichas-tecnicas/[id]/fornecedores/vincular/page.tsx
import Link from 'next/link'
import { ArrowLeft, Search, MapPin } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export default function VincularFornecedor() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Vincular Fornecedor</h1>
          <p className="text-muted-foreground">Selecione um fornecedor para vincular ao Camarão Rosa Limpo</p>
        </div>
        <Link href="/fichas-tecnicas/1/fornecedores">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar
          </Button>
        </Link>
      </div>

      {/* Busca */}
      <Card>
        <CardContent className="pt-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input className="pl-9" placeholder="Buscar fornecedores..." />
          </div>
        </CardContent>
      </Card>

      {/* Lista de Fornecedores */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Fornecedor</TableHead>
                <TableHead>Localização</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <div>
                    <p className="font-medium">Distribuidora Oceânica</p>
                    <p className="text-sm text-muted-foreground">CNPJ: 11.222.333/0001-44</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Florianópolis, SC</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge className="bg-green-100 text-green-800">
                    Ativo
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Link href="/fichas-tecnicas/1/fornecedores">
                    <Button size="sm">Vincular</Button>
                  </Link>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <div>
                    <p className="font-medium">Frutos do Mar Express</p>
                    <p className="text-sm text-muted-foreground">CNPJ: 55.666.777/0001-88</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Santos, SP</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge className="bg-green-100 text-green-800">
                    Ativo
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Link href="/fichas-tecnicas/1/fornecedores">
                    <Button size="sm">Vincular</Button>
                  </Link>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}