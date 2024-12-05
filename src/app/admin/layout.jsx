import { PrimeReactProvider } from 'primereact/api'
import  AdminLayout  from '@/components/admin/layout'
import 'primeflex/primeflex.css'
import 'primereact/resources/primereact.css'
import 'primeicons/primeicons.css'
import 'primereact/resources/themes/lara-light-indigo/theme.css'

export default function AdminRootLayout({ children }) {

  return (
    <PrimeReactProvider>
      <AdminLayout>
        {children}
      </AdminLayout>
    </PrimeReactProvider>
  )
}