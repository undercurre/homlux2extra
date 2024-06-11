declare namespace ApiAuth {
  interface Token {
    token: string;
    mobilePhone: string;
    userName: string;
    roleList?: UserRole[];
  }

  interface UserRole {
    roleId: string; // 角色Id
    roleName: string; // 角色名称
    roleLevel: number; // 角色级别 0: 总管 1：商户超管 2：项目管理员 3：使用者
    defaultRoleFlag: 0 | 1; //	默认角色标记：0-非默认 1-默认	integer
    projectId: string; //	项目id
  }
}
