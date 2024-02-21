enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer',
}

type User = {
  username: string;
  role: ROLES;
};

const znupUser: User = {
  username: 'znup',
  role: ROLES.ADMIN,
};
