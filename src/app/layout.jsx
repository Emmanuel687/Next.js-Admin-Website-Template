import '../styles/main.scss'
import 'primeflex/primeflex.css'
import 'primereact/resources/primereact.css'
import 'primeicons/primeicons.css'
import 'primereact/resources/themes/lara-light-indigo/theme.css'
import { PrimeReactProvider } from 'primereact/api'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <PrimeReactProvider>
          {children}
        </PrimeReactProvider>
      </body>
    </html>
  )
}
