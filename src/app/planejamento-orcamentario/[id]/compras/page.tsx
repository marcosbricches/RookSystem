// src/app/planejamento-orcamentario/[id]/compras/page.tsx
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import {
  ArrowLeft,
  PlusCircle,
  Upload,
  FileSpreadsheet,
  Edit,
  Trash2,
  Filter
} from "lucide-react"

export default function ComprasPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Link href="/planejamento-orcamentario/1">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Compras Categorizadas</h1>
            <p className="text-muted-foreground mt-2">
              Janeiro 2025 - Registro e visualização de compras por categoria
            </p>
          </div>
        </div>

        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <Upload className="h-4 w-4" />
            Importar
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <FileSpreadsheet className="h-4 w-4" />
            Exportar
          </Button>
          
          <Link href="/planejamento-orcamentario/1/compras/new">
          <Button className="flex items-center gap-2">
            <PlusCircle className="h-4 w-4" />
            Nova Compra
          </Button>
          </Link>
        </div>
      </div>

      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4 md:items-end">
            <div className="flex-1 space-y-2">
              <p className="text-sm font-medium">Categoria</p>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Todas as categorias" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="proteina">Proteína Animal</SelectItem>
                  <SelectItem value="graos">Grãos e Cereais</SelectItem>
                  <SelectItem value="laticinios">Laticínios</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex-1 space-y-2">
              <p className="text-sm font-medium">Subcategoria</p>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Todas as subcategorias" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="carnes">Carnes Nobres</SelectItem>
                  <SelectItem value="massas">Massas Artesanais</SelectItem>
                  <SelectItem value="queijos">Queijos Especiais</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex-1 space-y-2">
              <p className="text-sm font-medium">Valor Mínimo</p>
              <Input type="number" placeholder="R$ 0,00" />
            </div>

            <div className="flex-1 space-y-2">
              <p className="text-sm font-medium">Valor Máximo</p>
              <Input type="number" placeholder="R$ 0,00" />
            </div>

            <Button variant="secondary" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filtrar
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Produto</TableHead>
                <TableHead>Categoria</TableHead>
                <TableHead>Subcategoria</TableHead>
                <TableHead>Quantidade</TableHead>
                <TableHead>Unidade</TableHead>
                <TableHead>Valor Unit.</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Data</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[1, 2, 3].map((item) => (
                <TableRow key={item}>
                  <TableCell>Camarão Rosa</TableCell>
                  <TableCell>Proteína Animal</TableCell>
                  <TableCell>Frutos do Mar</TableCell>
                  <TableCell>25</TableCell>
                  <TableCell>kg</TableCell>
                  <TableCell>R$ 85,00</TableCell>
                  <TableCell>R$ 2.125,00</TableCell>
                  <TableCell>10/01/2025</TableCell>
                  <TableCell>
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="text-red-500 hover:text-red-600">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="flex justify-between items-center mt-4 text-sm text-muted-foreground">
            <p>Mostrando 3 de 42 registros</p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">Anterior</Button>
              <Button variant="outline" size="sm">Próxima</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}