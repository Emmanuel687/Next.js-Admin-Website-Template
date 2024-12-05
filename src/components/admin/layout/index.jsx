import Header from './Header'
import Sidebar from './Sidebar'


const AdminLayout = ({ children }) => {

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="p-4">
          {children}
        </main>
      </div>
    </div>
  )
}

export default AdminLayout