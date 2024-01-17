import BoilerBox from '@/components/boilerplate/boilerbox'
import styles from './page.module.css'
import Sidebar from '@/components/sidebar/sidebar'
import Dashboard from '@/components/dashboard/dashboard'

export default async function Page() {

  return (
    <main className={styles.page} >
      <Sidebar />
      <Dashboard />
    </main>
  )
}

