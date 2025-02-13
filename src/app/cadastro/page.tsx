import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Building2, User, Phone, Mail, FileCheck } from "lucide-react"
import Link from "next/link"

export default function CadastroPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      
      {/* Conteúdo principal */}
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Bem-vindo ao Rook System</h1>
            <p className="mt-2 text-gray-600">
              Comece sua jornada para uma gestão mais eficiente do seu restaurante
            </p>
          </div>

          <Card className="border-0 shadow-lg">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl">Criar sua conta</CardTitle>
              <CardDescription>
                Preencha os dados iniciais para começar
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                {/* Tipo de Pessoa */}
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Tipo de cadastro</Label>
                  <RadioGroup defaultValue="pj" className="grid grid-cols-2 gap-4">
                    <Label 
                      className="flex flex-col items-center justify-between rounded-xl border-2 border-muted bg-white p-4 hover:bg-gray-50 cursor-pointer transition-colors [&:has([data-state=checked])]:border-primary [&:has([data-state=checked])]:bg-primary/5"
                    >
                      <RadioGroupItem value="pj" className="sr-only" />
                      <Building2 className="h-6 w-6 mb-2 text-gray-600" />
                      <span className="text-sm font-medium">Pessoa Jurídica</span>
                    </Label>
                    <Label 
                      className="flex flex-col items-center justify-between rounded-xl border-2 border-muted bg-white p-4 hover:bg-gray-50 cursor-pointer transition-colors [&:has([data-state=checked])]:border-primary [&:has([data-state=checked])]:bg-primary/5"
                    >
                      <RadioGroupItem value="pf" className="sr-only" />
                      <User className="h-6 w-6 mb-2 text-gray-600" />
                      <span className="text-sm font-medium">Pessoa Física</span>
                    </Label>
                  </RadioGroup>
                </div>

                {/* Campos do formulário */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium">
                      Nome completo
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                      <Input 
                        id="name" 
                        placeholder="Digite seu nome completo" 
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium">
                      Telefone
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                      <Input 
                        id="phone" 
                        placeholder="(99) 99999-9999" 
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">
                      E-mail
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="exemplo@email.com" 
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="document" className="text-sm font-medium">
                      CNPJ ou CPF
                    </Label>
                    <div className="relative">
                      <FileCheck className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                      <Input 
                        id="document" 
                        placeholder="Digite apenas números" 
                        className="pl-10"
                      />
                    </div>
                  </div>
                </div>

                {/* Botão de ação */}
                <Link href="/cadastro/complementar" className="block">
                  <Button className="w-full h-11 text-base font-medium">
                    Continuar cadastro
                  </Button>
                </Link>

                {/* Link para login */}
                <p className="text-center text-sm text-gray-600">
                  Já tem uma conta?{" "}
                  <Link 
                    href="/login" 
                    className="font-medium text-primary hover:underline transition-colors"
                  >
                    Faça login
                  </Link>
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}