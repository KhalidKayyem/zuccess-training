/**
 * @file Hardcoded employee directory used for the app's demo-style
 * name+number sign-in check and client-side role display. This is NOT real
 * authentication — see src/data/schema.js for the shared type conventions
 * this file follows.
 */

/**
 * @typedef {Object} Employee
 * @property {string} employeeNumber - Unique employee number, used together
 *   with name for the client-side sign-in check.
 * @property {Localized} name - Employee's name.
 * @property {string} groupId - The EmployeeGroup id this employee belongs to.
 * @property {'admin'|'learner'} role - Determines which view the employee sees.
 */

export const EMPLOYEES = [
  {
    employeeNumber: 'EMP-1042',
    name: { en: 'Ahmed Al-Rashid', ar: 'أحمد الراشد' },
    groupId: 'kitchen-staff',
    role: 'learner',
  },
  {
    employeeNumber: 'EMP-2187',
    name: { en: 'Fatima Al-Zahrani', ar: 'فاطمة الزهراني' },
    groupId: 'front-of-house',
    role: 'learner',
  },
  {
    employeeNumber: 'EMP-3355',
    name: { en: 'Omar Haddad', ar: 'عمر حداد' },
    groupId: 'delivery-drivers',
    role: 'learner',
  },
  {
    employeeNumber: 'EMP-4021',
    name: { en: 'Layla Mansour', ar: 'ليلى منصور' },
    groupId: 'warehouse-receiving',
    role: 'learner',
  },
  {
    employeeNumber: 'EMP-5610',
    name: { en: 'Yusuf Karim', ar: 'يوسف كريم' },
    groupId: 'supervisors',
    role: 'admin',
  },
]
