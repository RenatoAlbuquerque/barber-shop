"use client"

import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { Linkedin, Github } from "lucide-react"
import Link from "next/link"

const Footer = () => {
  return (
    <footer>
      <Card>
        <CardContent className="flex items-center justify-between px-5 py-6">
          <p className="text-sm text-gray-400">
            © 2024 Copyright <span className="font-bold">FSW Barber</span>
          </p>
          <div className="flex gap-2">
            <Link href="https://github.com/RenatoAlbuquerque" target="_blank">
              <Button className="h-8 w-8 rounded-full bg-secondary p-0">
                <Github width={20} height={20} />
              </Button>
            </Link>
            <Link
              href="https://www.linkedin.com/in/renato-albuquerque-dev/"
              target="_blank"
            >
              <Button className="h-8 w-8 rounded-full bg-secondary p-0">
                <Linkedin width={20} height={20} />
              </Button>
            </Link>
          </div>
        </CardContent>
        <p className="w-full pb-2 text-center text-sm text-gray-400">
          Desenvolvido por <span className="font-bold">Renato Albuquerque</span>
        </p>
      </Card>
    </footer>
  )
}

export default Footer
