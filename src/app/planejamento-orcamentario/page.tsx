// src/app/planejamento-orcamentario/page.tsx
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { 
  PlusCircle, 
  ArrowUpDown, 
  Eye, 
  Edit, 
  LineChart,
  ShoppingBag,
  Lightbulb
} from "lucide-react"

export default function PlanejamentoOrcamentarioPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Planejamento Orçamentário</h1>
          <p className="text-muted-foreground mt-2">
            Gerencie seus planejamentos financeiros e controle seus indicadores
          </p>
        </div>
        <Link href="/planejamento-orcamentario/new">
          <Button className="flex items-center gap-2">
            <PlusCircle className="h-4 w-4" />
            Novo Planejamento
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">CMV Médio</p>
              <p className="text-2xl font-bold">31.5%</p>
              <p className="text-xs text-muted-foreground">
                Últimos 30 dias
              </p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">Margem de Contribuição</p>
              <p className="text-2xl font-bold">R$ 125.430,00</p>
              <p className="text-xs text-muted-foreground">
                Últimos 30 dias
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">Lucro Operacional</p>
              <p className="text-2xl font-bold">R$ 45.890,00</p>
              <p className="text-xs text-muted-foreground">
                Últimos 30 dias
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8">
        <CardContent className="p-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[120px]">Período</TableHead>
                <TableHead>
                  <div className="flex items-center gap-2">
                    CMV
                    <ArrowUpDown className="h-4 w-4" />
                  </div>
                </TableHead>
                <TableHead>Faturamento</TableHead>
                <TableHead>Margem</TableHead>
                <TableHead>Lucro Op.</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[1, 2, 3].map((item) => (
                <TableRow key={item}>
                  <TableCell>Jan/2025</TableCell>
                  <TableCell>31.5%</TableCell>
                  <TableCell>R$ 398.500,00</TableCell>
                  <TableCell>R$ 125.430,00</TableCell>
                  <TableCell>R$ 45.890,00</TableCell>
                  <TableCell>
                    <div className="flex justify-end gap-2">
                      <Link href={`/planejamento-orcamentario/${item}`}>
                        <Button variant="ghost" size="icon">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </Link>
                      <Link href={`/planejamento-orcamentario/${item}/edit`}>
                        <Button variant="ghost" size="icon">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </Link>
                      <Link href={`/planejamento-orcamentario/${item}/cmv`}>
                        <Button variant="ghost" size="icon">
                          <LineChart className="h-4 w-4" />
                        </Button>
                      </Link>
                      <Link href={`/planejamento-orcamentario/${item}/compras`}>
                        <Button variant="ghost" size="icon">
                          <ShoppingBag className="h-4 w-4" />
                        </Button>
                      </Link>
                      <Link href={`/planejamento-orcamentario/${item}/sugestoes`}>
                        <Button variant="ghost" size="icon">
                          <Lightbulb className="h-4 w-4" />
                        </Button>
                      </Link>
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