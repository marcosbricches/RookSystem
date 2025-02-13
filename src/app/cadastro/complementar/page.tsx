import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Building2, DollarSign, Users, MapPin, ChefHat, Briefcase, KeyRound } from "lucide-react"
import Link from "next/link"

export default function CadastroComplementarPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Iniciar Jornada no Rook</h1>
          <p className="mt-2 text-gray-600">
            Complete seu cadastro para ter acesso a todas as funcionalidades
          </p>
        </div>

        <Card className="border-0 shadow-lg">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl flex items-center gap-2">
              <Building2 className="h-6 w-6 text-primary" />
              Dados do Estabelecimento
            </CardTitle>
            <CardDescription>
              Preencha as informações do seu negócio para personalizar sua experiência
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-8">
              {/* Dados Financeiros */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Informações Financeiras</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="razaoSocial">Razão Social</Label>
                    <Input 
                      id="razaoSocial" 
                      disabled 
                      placeholder="Preenchimento automático" 
                      className="bg-gray-50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="faturamento">Faturamento Médio (12 meses)</Label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                      <Input id="faturamento" placeholder="R$ 0,00" className="pl-10" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="regime">Regime Tributário</Label>
                    <Select>
                      <SelectTrigger className="h-10">
                        <SelectValue placeholder="Selecione o regime" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="simples">Simples Nacional</SelectItem>
                        <SelectItem value="presumido">Lucro Presumido</SelectItem>
                        <SelectItem value="real">Lucro Real</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="ticket">Ticket Médio</Label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                      <Input id="ticket" placeholder="R$ 0,00" className="pl-10" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="clientes">Quantidade de Clientes Diários</Label>
                    <div className="relative">
                      <Users className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                      <Input id="clientes" type="number" placeholder="0" className="pl-10" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Dados do Estabelecimento */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Dados do Local</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="estabelecimento">Nome do Estabelecimento</Label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                      <Input 
                        id="estabelecimento" 
                        placeholder="Digite o nome do seu restaurante" 
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="culinaria">Tipo de Culinária</Label>
                    <div className="relative">
                      <ChefHat className="absolute left-3 top-2.5 h-5 w-5 text-gray-400 z-10" />
                      <Select>
                        <SelectTrigger className="pl-10">
                          <SelectValue placeholder="Selecione o tipo" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="italiana">Italiano - Massas Artesanais</SelectItem>
                          <SelectItem value="japonesa">Japonês - Sushi</SelectItem>
                          <SelectItem value="brasileira">Brasileiro - Feijoada</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="cep">CEP</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                      <Input id="cep" placeholder="99999-999" className="pl-10" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="endereco">Endereço Completo</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                      <Input 
                        id="endereco" 
                        placeholder="Rua, número, complemento" 
                        className="pl-10"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Dados do Responsável */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Dados do Responsável</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="cargo">Cargo</Label>
                    <div className="relative">
                      <Briefcase className="absolute left-3 top-2.5 h-5 w-5 text-gray-400 z-10" />
                      <Select>
                        <SelectTrigger className="pl-10">
                          <SelectValue placeholder="Selecione o cargo" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="proprietario">Proprietário</SelectItem>
                          <SelectItem value="gerente">Gerente</SelectItem>
                          <SelectItem value="supervisor">Supervisor</SelectItem>
                          <SelectItem value="comprador">Comprador</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="senha">Senha</Label>
                    <div className="relative">
                      <KeyRound className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                      <Input 
                        id="senha" 
                        type="password" 
                        placeholder="********" 
                        className="pl-10"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Botões de ação */}
              <div className="flex gap-4 pt-4">
                <Button variant="outline" className="w-full h-11 text-base">
                  Voltar
                </Button>
                <Link href="/dashboard" className="w-full">
                  <Button className="w-full h-11 text-base">
                    Finalizar cadastro
                  </Button>
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}