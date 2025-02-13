// src/app/fichas-tecnicas/page.tsx
import Link from 'next/link'
import { Plus, FileText, Search, Filter, MoreHorizontal, ArrowUpDown } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

// Tipos
interface FichaTecnica {
  id: string
  nome: string
  categoria: string
  validade: string
  status: 'ativo' | 'inativo'
  ultimaAtualizacao: string
  fornecedores: number
}

// Dados mock mais elaborados
const fichasTecnicas: FichaTecnica[] = [
  {
    id: '1',
    nome: 'Camarão Rosa Limpo',
    categoria: 'Proteínas/Frutos do Mar',
    validade: '2025-03-15',
    status: 'ativo',
    ultimaAtualizacao: '2024-02-10',
    fornecedores: 3
  },
  {
    id: '2',
    nome: 'Arroz Branco Premium',
    categoria: 'Grãos/Cereais',
    validade: '2025-06-20',
    status: 'ativo',
    ultimaAtualizacao: '2024-02-08',
    fornecedores: 2
  },
  {
    id: '3',
    nome: 'Farinha de Trigo Especial',
    categoria: 'Farináceos',
    validade: '2025-04-01',
    status: 'inativo',
    ultimaAtualizacao: '2024-01-15',
    fornecedores: 4
  },
]

// Componentes específicos da página
const StatusBadge = ({ status }: { status: FichaTecnica['status'] }) => {
  const variants = {
    ativo: 'bg-green-100 text-green-800 hover:bg-green-200',
    inativo: 'bg-red-100 text-red-800 hover:bg-red-200',
  }

  return (
    <Badge className={variants[status]}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </Badge>
  )
}

const TableActions = ({ ficha }: { ficha: FichaTecnica }) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
        <MoreHorizontal className="h-4 w-4" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" className="w-[200px]">
      <DropdownMenuLabel>Ações da Ficha Técnica</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <Link href={`/fichas-tecnicas/${ficha.id}`} className="flex items-center">
          <FileText className="mr-2 h-4 w-4" />
          Visualizar Detalhes
        </Link>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Link href={`/fichas-tecnicas/${ficha.id}/edit`} className="flex items-center">
          <FileText className="mr-2 h-4 w-4" />
          Editar Ficha
        </Link>
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem className="text-red-600 focus:text-red-600 focus:bg-red-50">
        Excluir Ficha
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
)

const SearchFilters = () => (
  <Card className="border-border/40 shadow-sm">
    <CardHeader className="pb-4">
      <CardTitle className="text-lg font-semibold">Filtros Avançados</CardTitle>
      <CardDescription>
        Refine sua busca utilizando múltiplos critérios
      </CardDescription>
    </CardHeader>
    <CardContent>
      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Buscar por nome do produto, categoria..."
              className="pl-9"
            />
          </div>
        </div>
        <div className="flex gap-2">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Categoria" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="proteinas">Proteínas</SelectItem>
              <SelectItem value="graos">Grãos e Cereais</SelectItem>
              <SelectItem value="farinaceos">Farináceos</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ativo">Ativo</SelectItem>
              <SelectItem value="inativo">Inativo</SelectItem>
            </SelectContent>
          </Select>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Mais filtros</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </CardContent>
  </Card>
)

export default function FichasTecnicas() {
  return (
    <div className="container p-6 space-y-6 max-w-7xl mx-auto">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-primary">
            Fichas Técnicas
          </h1>
          <p className="text-muted-foreground mt-1">
            Gerencie o cadastro e especificações técnicas dos produtos
          </p>
        </div>
        <Link href="/fichas-tecnicas/new">
          <Button className="w-full sm:w-auto">
            <Plus className="mr-2 h-4 w-4" />
            Nova Ficha Técnica
          </Button>
        </Link>
      </div>

      <SearchFilters />

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead className="w-[300px]">
                  <Button variant="ghost" className="font-semibold hover:bg-transparent">
                    Nome do Produto
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                  </Button>
                </TableHead>
                <TableHead>Categoria</TableHead>
                <TableHead>Validade</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Fornecedores</TableHead>
                <TableHead>Última Atualização</TableHead>
                <TableHead className="w-[100px]">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {fichasTecnicas.map((ficha) => (
                <TableRow key={ficha.id} className="hover:bg-muted/50">
                  <TableCell className="font-medium">{ficha.nome}</TableCell>
                  <TableCell>{ficha.categoria}</TableCell>
                  <TableCell>{new Date(ficha.validade).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <StatusBadge status={ficha.status} />
                  </TableCell>
                  <TableCell>{ficha.fornecedores}</TableCell>
                  <TableCell>{new Date(ficha.ultimaAtualizacao).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <TableActions ficha={ficha} />
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