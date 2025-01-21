import { useEffect, useState } from 'react';

import { DepartmentServices } from '@/services/features/department';
import { EquipmentServices } from '@/services/features/equipment';
import { RoleServices } from '@/services/features/role';
import { TechnicianServices } from '@/services/features/technician';
import { UserServices } from '@/services/features/user';
import { Department } from '@/types/department';
import { Equipment } from '@/types/equipment';
import { Role } from '@/types/role';
import { Technician } from '@/types/technician';
import { User } from '@/types/user';
import { SelectableOption } from '@/types/utils';

interface UseFetchOptionsProps {
  selectFrom: SelectableOption[];
}

export const useFetchOptions = ({ selectFrom }: UseFetchOptionsProps) => {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [equipments, setEquipments] = useState<Equipment[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [technicians, setTechnicians] = useState<Technician[]>([]);
  const [roles, setRoles] = useState<Role[]>([]);

  useEffect(() => {
    const fetchDepartments = async () => {
      const { data } = await DepartmentServices.getAll();
      const options = data as Department[];
      setDepartments(options);
    };

    const fetchEquipments = async () => {
      const { data } = await EquipmentServices.getAll();
      const options = data as Equipment[];
      setEquipments(options);
    };

    const fetchUsers = async () => {
      const { data } = await UserServices.getAll();
      const options = data as User[];
      setUsers(options);
    };

    const fetchTechnicians = async () => {
      const { data } = await TechnicianServices.getAll();
      const options = data as Technician[];
      setTechnicians(options);
    };

    const fetchRoles = async () => {
      const { data } = await RoleServices.getAll();
      const options = data as Role[];
      setRoles(options);
    };

    const fetchFunctions = {
      DEPARTMENT: fetchDepartments,
      EQUIPMENT: fetchEquipments,
      USER: fetchUsers,
      TECHNICIAN: fetchTechnicians,
      ROLE: fetchRoles
    };
    selectFrom.forEach((select) => fetchFunctions[select]());
  }, []);

  return { departments, equipments, users, technicians, roles };
};
