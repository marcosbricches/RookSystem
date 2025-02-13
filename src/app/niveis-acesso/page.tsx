// app/niveis-acesso/page.tsx

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Pen, Plus, Trash2, Shield } from "lucide-react"

export default function NiveisAcessoPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <Card className="border-0 shadow-lg">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <CardTitle className="text-2xl flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                Níveis de Acesso
              </CardTitle>
              <p className="text-sm text-gray-500">
                Gerencie os níveis de acesso e suas permissões
              </p>
            </div>
            
            {/* Modal de Adicionar */}
            <Dialog>
              <DialogTrigger asChild>
                <Button className="gap-2">
                  <Plus className="h-4 w-4" />
                  Novo Nível
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Criar Nível de Acesso</DialogTitle>
                  <DialogDescription>
                    Defina as informações do novo nível de acesso
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="level">Nome do Nível</Label>
                    <Input id="level" placeholder="Ex: Gerente" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">Descrição</Label>
                    <Input id="description" placeholder="Descreva as responsabilidades deste nível" />
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline">Cancelar</Button>
                  <Button>Salvar</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>

        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nível</TableHead>
                <TableHead>Descrição</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                {
                  level: "Master (CCGN)",
                  description: "Acesso total ao sistema, incluindo gestão de planos, categorias, relatórios e usuários",
                  status: "Ativo"
                },
                {
                  level: "Administrador",
                  description: "Controle completo do restaurante, incluindo convites para usuários e gestão de estoque",
                  status: "Ativo"
                },
                {
                  level: "Gerente",
                  description: "Acesso aos relatórios e controle de estoque, sem permissões para editar usuários",
                  status: "Ativo"
                },
                {
                  level: "Comprador",
                  description: "Gestão de fichas técnicas e pedidos de compras",
                  status: "Ativo"
                },
                {
                  level: "Contador",
                  description: "Acesso exclusivo aos relatórios financeiros",
                  status: "Ativo"
                }
              ].map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{item.level}</TableCell>
                  <TableCell className="max-w-md">{item.description}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      {item.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Pen className="h-4 w-4 text-gray-500" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:text-red-500 hover:bg-red-50">
                        <Trash2 className="h-4 w-4" />
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