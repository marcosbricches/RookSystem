// src/app/page.tsx
"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Square, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

const functionalities = [
  {
    title: "Gestão Financeira",
    description: "Controle financeiro e planejamento orçamentário",
    sections: [
      {
        title: "Orçamento",
        links: [
          { href: "/financeiro/planejamento", label: "Planejamento Orçamentário" },
          { href: "/financeiro/resultados", label: "Resultados Financeiros" }
        ]
      },
      {
        title: "Análises",
        links: [
          { href: "/financeiro/forecasting", label: "Forecasting de Crescimento" }
        ]
      }
    ]
  },
  {
    title: "Acesso e Segurança",
    description: "Navegue pelas funcionalidades implementadas",
    sections: [
      {
        title: "Autenticação",
        links: [
          { href: "/auth/login", label: "Login" },
          { href: "/auth/2fa", label: "Autenticação 2FA" }
        ]
      },
      {
        title: "Recuperação de Senha",
        links: [
          { href: "/auth/forgot-password", label: "Esqueci a Senha" },
          { href: "/auth/reset-password", label: "Redefinir Senha" }
        ]
      },
      {
        title: "Registro Inicial",
        links: [
          { href: "/auth/register", label: "Cadastro" }
        ]
      },
      {
        title: "Onboarding",
        links: [
          { href: "/auth/onboarding/pf", label: "Completar Cadastro - PF" },
          { href: "/auth/onboarding/pj", label: "Completar Cadastro - PJ" }
        ]
      }
    ]
  },
  
  // ADICIONE NOVAS FUNCIONALIDADES AQUI
  // Copie e cole o modelo abaixo:
  /*
  {
    title: "Nome da Funcionalidade",
    description: "Breve descrição da funcionalidade",
    sections: [
      {
        title: "Nome da Seção",
        links: [
          { href: "/rota/pagina", label: "Nome do Link" },
          { href: "/rota/outra-pagina", label: "Nome do Outro Link" }
        ]
      }
    ]
  },
  */
  {
    title: "Próxima Funcionalidade",
    description: "Em desenvolvimento",
    sections: []
  }
]

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-3xl relative">
        {/* Botões de navegação */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setCurrentIndex(prev => prev - 1)}
            disabled={currentIndex === 0}
            className="rounded-full"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setCurrentIndex(prev => prev + 1)}
            disabled={currentIndex === functionalities.length - 1}
            className="rounded-full"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Card principal */}
        <div className="overflow-hidden">
          <div
            className="transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            <div className="flex">
              {functionalities.map((functionality, index) => (
                <Card key={index} className="w-full flex-shrink-0">
                  <CardHeader className="space-y-4 flex flex-col items-center">
                    <div className="w-12 h-12 bg-primary flex items-center justify-center rounded-lg">
                      <Square className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div className="space-y-2 text-center">
                      <h1 className="text-2xl font-semibold tracking-tight">
                        {functionality.title}
                      </h1>
                      <p className="text-sm text-muted-foreground">
                        {functionality.description}
                      </p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {functionality.sections.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {functionality.sections.map((section, sectionIndex) => (
                          <div key={sectionIndex} className="space-y-2">
                            <h3 className="text-sm font-medium">{section.title}</h3>
                            <div className="grid gap-2">
                              {section.links.map((link, linkIndex) => (
                                <Button
                                  key={linkIndex}
                                  asChild
                                  variant="outline"
                                  className="justify-start"
                                >
                                  <Link href={link.href}>{link.label}</Link>
                                </Button>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="h-[400px] flex items-center justify-center">
                        <p className="text-muted-foreground">
                          Funcionalidades em desenvolvimento
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Indicadores de página */}
        <div className="flex justify-center gap-2 mt-4">
          {functionalities.map((_, index) => (
            <Button
              key={index}
              variant="ghost"
              size="icon"
              className={`w-2 h-2 rounded-full p-0 ${
                currentIndex === index ? "bg-primary" : "bg-muted"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}