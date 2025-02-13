// src/app/fichas-tecnicas/[id]/fornecedores/[fornecedorId]/historico/page.tsx
import Link from 'next/link'
import { ArrowLeft, ArrowUpDown, Download } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export default function HistoricoFornecedor() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Histórico - Frigorífico Mar Azul</h1>
          <p className="text-muted-foreground">Histórico de pedidos e entregas do fornecedor</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Exportar
          </Button>
          <Link href="/fichas-tecnicas/1/fornecedores">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar
            </Button>
          </Link>
        </div>
      </div>

      {/* Cards de Resumo */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total de Pedidos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">48</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Valor Total
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 157.892,00</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Prazo Médio de Entrega
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.4 dias</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Taxa de Entrega no Prazo
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">95%</div>
          </CardContent>
        </Card>
      </div>

      {/* Tabela de Histórico */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>
                  <Button variant="ghost" className="pl-0">
                    Data
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                  </Button>
                </TableHead>
                <TableHead>Nº Pedido</TableHead>
                <TableHead>Quantidade</TableHead>
                <TableHead>Valor Total</TableHead>
                <TableHead>Prazo Prometido</TableHead>
                <TableHead>Data Entrega</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>13/02/2025</TableCell>
                <TableCell>#12345</TableCell>
                <TableCell>50 kg</TableCell>
                <TableCell>R$ 4.500,00</TableCell>
                <TableCell>2 dias</TableCell>
                <TableCell>15/02/2025</TableCell>
                <TableCell>
                  <Badge className="bg-green-100 text-green-800">
                    Entregue
                  </Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>10/02/2025</TableCell>
                <TableCell>#12344</TableCell>
                <TableCell>45 kg</TableCell>
                <TableCell>R$ 4.050,00</TableCell>
                <TableCell>2 dias</TableCell>
                <TableCell>11/02/2025</TableCell>
                <TableCell>
                  <Badge className="bg-green-100 text-green-800">
                    Entregue
                  </Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>07/02/2025</TableCell>
                <TableCell>#12343</TableCell>
                <TableCell>60 kg</TableCell>
                <TableCell>R$ 5.400,00</TableCell>
                <TableCell>2 dias</TableCell>
                <TableCell>10/02/2025</TableCell>
                <TableCell>
                  <Badge className="bg-yellow-100 text-yellow-800">
                    Atrasado
                  </Badge>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}