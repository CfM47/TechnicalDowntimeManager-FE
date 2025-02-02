import { useEffect, useState } from 'react';

import { PaginatedResponse } from '@/services/api/api';
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
      const { data } = await DepartmentServices.getAll({ page: 1, size: 1000 });
      const options = data as PaginatedResponse<Department>;
      setDepartments(options.items);
    };

    const fetchEquipments = async () => {
      const { data } = await EquipmentServices.getAll({ page: 1, size: 1000 });
      const options = data as PaginatedResponse<Equipment>;
      setEquipments(options.items);
    };

    const fetchUsers = async () => {
      const { data } = await UserServices.getAll({ page: 1, size: 1000 });
      const options = data as PaginatedResponse<User>;
      setUsers(options.items);
    };

    const fetchTechnicians = async () => {
      const { data } = await TechnicianServices.getAll({ page: 1, size: 1000 });
      const options = data as PaginatedResponse<Technician>;
      setTechnicians(options.items);
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
