export interface IProjectInput {
  invoiceNumber?: string | null;

  invoiceDate?: string | null;

  projectDate?: string | null;

  name?: string | null;

  date?: string | null;

  status?: IInvoiceStatus | null;

  client?: IClientInput | null;

  expenses?: IExpenseAndIncomeInput[] | null;

  incomes?: IExpenseAndIncomeInput[] | null;
}

export interface IClientInput {
  firstName?: string | null;

  lastName?: string | null;

  email?: string | null;

  phone?: string | null;

  postalCode?: string | null;

  address?: string | null;
}

export interface IExpenseAndIncomeInput {
  name?: string | null;

  price?: string | null;

  quantity?: number | null;

  taxRate?: number | null;
}

export enum IInvoiceStatus {
  None = "none",
  Invoice = "invoice",
  Paid = "paid"
}

export type Date = any;

// ====================================================
// Scalars
// ====================================================

// ====================================================
// Types
// ====================================================

export interface IQuery {
  getUser?: IUser | null;

  getProjectsByUserId: IProject[];

  getSingleProject?: IProject | null;

  getClientsByUser?: IClient[] | null;
}

export interface IUser {
  id: string;

  firstName: string;

  lastName: string;

  email: string;

  password: string;

  projects?: IProject[] | null;

  expenses?: IExpense[] | null;

  clients?: IClient[] | null;
}

export interface IProject {
  id: string;

  invoiceNumber: string;

  invoiceDate?: Date | null;

  name: string;

  projectDate?: Date | null;

  streetAddress?: string | null;

  city?: string | null;

  link?: string | null;

  status: IInvoiceStatus;

  client?: IClient | null;

  user: string;

  expenses?: IExpenseAndIncome[] | null;

  incomes?: IExpenseAndIncome[] | null;
}

export interface IClient {
  id: string;

  firstName?: string | null;

  lastName?: string | null;

  email?: string | null;

  phone?: string | null;

  postalCode?: string | null;

  address?: string | null;

  user?: string | null;

  projects?: string[] | null;
}

export interface IExpenseAndIncome {
  name?: string | null;

  price?: string | null;

  quantity?: number | null;

  taxRate?: number | null;
}

export interface IExpense {
  name?: string | null;

  price?: string | null;

  quantity?: number | null;

  taxRate?: number | null;

  date?: string | null;
}

export interface IMutation {
  registerUser: IRegisterResponse;

  loginUser: IRegisterResponse;

  updateProject: IMutationProjectResponse;

  addProject?: IMutationProjectResponse | null;

  deleteProject?: IMutationProjectResponse | null;
}

export interface IRegisterResponse {
  success: boolean;

  message?: string | null;

  token: string;
}

export interface IMutationProjectResponse {
  success: boolean;

  message?: string | null;

  project?: IProject | null;
}

// ====================================================
// Arguments
// ====================================================

export interface GetUserQueryArgs {
  id: string;
}
export interface GetProjectsByUserIdQueryArgs {
  userId: string;
}
export interface GetSingleProjectQueryArgs {
  projectId: string;
}
export interface GetClientsByUserQueryArgs {
  userId: string;
}
export interface RegisterUserMutationArgs {
  firstName: string;

  lastName: string;

  email: string;

  password: string;
}
export interface LoginUserMutationArgs {
  email: string;

  password: string;
}
export interface UpdateProjectMutationArgs {
  projectId: string;

  data: IProjectInput;
}
export interface AddProjectMutationArgs {
  data: IProjectInput;
}
export interface DeleteProjectMutationArgs {
  projectId: string;
}

import { GraphQLResolveInfo, GraphQLScalarTypeConfig } from "graphql";

export type Resolver<Result, Parent = {}, Context = {}, Args = {}> = (
  parent: Parent,
  args: Args,
  context: Context,
  info: GraphQLResolveInfo
) => Promise<Result> | Result;

export interface ISubscriptionResolverObject<Result, Parent, Context, Args> {
  subscribe<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): AsyncIterator<R | Result> | Promise<AsyncIterator<R | Result>>;
  resolve?<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): R | Result | Promise<R | Result>;
}

export type SubscriptionResolver<
  Result,
  Parent = {},
  Context = {},
  Args = {}
> =
  | ((
      ...args: any[]
    ) => ISubscriptionResolverObject<Result, Parent, Context, Args>)
  | ISubscriptionResolverObject<Result, Parent, Context, Args>;

type Maybe<T> = T | null | undefined;

export type TypeResolveFn<Types, Parent = {}, Context = {}> = (
  parent: Parent,
  context: Context,
  info: GraphQLResolveInfo
) => Maybe<Types>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult, TArgs = {}, TContext = {}> = (
  next: NextResolverFn<TResult>,
  source: any,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export namespace QueryResolvers {
  export interface Resolvers<Context = {}, TypeParent = {}> {
    getUser?: GetUserResolver<IUser | null, TypeParent, Context>;

    getProjectsByUserId?: GetProjectsByUserIdResolver<
      IProject[],
      TypeParent,
      Context
    >;

    getSingleProject?: GetSingleProjectResolver<
      IProject | null,
      TypeParent,
      Context
    >;

    getClientsByUser?: GetClientsByUserResolver<
      IClient[] | null,
      TypeParent,
      Context
    >;
  }

  export type GetUserResolver<
    R = IUser | null,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, GetUserArgs>;
  export interface GetUserArgs {
    id: string;
  }

  export type GetProjectsByUserIdResolver<
    R = IProject[],
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, GetProjectsByUserIdArgs>;
  export interface GetProjectsByUserIdArgs {
    userId: string;
  }

  export type GetSingleProjectResolver<
    R = IProject | null,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, GetSingleProjectArgs>;
  export interface GetSingleProjectArgs {
    projectId: string;
  }

  export type GetClientsByUserResolver<
    R = IClient[] | null,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, GetClientsByUserArgs>;
  export interface GetClientsByUserArgs {
    userId: string;
  }
}

export namespace UserResolvers {
  export interface Resolvers<Context = {}, TypeParent = IUser> {
    id?: IdResolver<string, TypeParent, Context>;

    firstName?: FirstNameResolver<string, TypeParent, Context>;

    lastName?: LastNameResolver<string, TypeParent, Context>;

    email?: EmailResolver<string, TypeParent, Context>;

    password?: PasswordResolver<string, TypeParent, Context>;

    projects?: ProjectsResolver<IProject[] | null, TypeParent, Context>;

    expenses?: ExpensesResolver<IExpense[] | null, TypeParent, Context>;

    clients?: ClientsResolver<IClient[] | null, TypeParent, Context>;
  }

  export type IdResolver<R = string, Parent = IUser, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >;
  export type FirstNameResolver<
    R = string,
    Parent = IUser,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type LastNameResolver<
    R = string,
    Parent = IUser,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type EmailResolver<
    R = string,
    Parent = IUser,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type PasswordResolver<
    R = string,
    Parent = IUser,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type ProjectsResolver<
    R = IProject[] | null,
    Parent = IUser,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type ExpensesResolver<
    R = IExpense[] | null,
    Parent = IUser,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type ClientsResolver<
    R = IClient[] | null,
    Parent = IUser,
    Context = {}
  > = Resolver<R, Parent, Context>;
}

export namespace ProjectResolvers {
  export interface Resolvers<Context = {}, TypeParent = IProject> {
    id?: IdResolver<string, TypeParent, Context>;

    invoiceNumber?: InvoiceNumberResolver<string, TypeParent, Context>;

    invoiceDate?: InvoiceDateResolver<Date | null, TypeParent, Context>;

    name?: NameResolver<string, TypeParent, Context>;

    projectDate?: ProjectDateResolver<Date | null, TypeParent, Context>;

    streetAddress?: StreetAddressResolver<string | null, TypeParent, Context>;

    city?: CityResolver<string | null, TypeParent, Context>;

    link?: LinkResolver<string | null, TypeParent, Context>;

    status?: StatusResolver<IInvoiceStatus, TypeParent, Context>;

    client?: ClientResolver<IClient | null, TypeParent, Context>;

    user?: UserResolver<string, TypeParent, Context>;

    expenses?: ExpensesResolver<
      IExpenseAndIncome[] | null,
      TypeParent,
      Context
    >;

    incomes?: IncomesResolver<IExpenseAndIncome[] | null, TypeParent, Context>;
  }

  export type IdResolver<
    R = string,
    Parent = IProject,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type InvoiceNumberResolver<
    R = string,
    Parent = IProject,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type InvoiceDateResolver<
    R = Date | null,
    Parent = IProject,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type NameResolver<
    R = string,
    Parent = IProject,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type ProjectDateResolver<
    R = Date | null,
    Parent = IProject,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type StreetAddressResolver<
    R = string | null,
    Parent = IProject,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type CityResolver<
    R = string | null,
    Parent = IProject,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type LinkResolver<
    R = string | null,
    Parent = IProject,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type StatusResolver<
    R = IInvoiceStatus,
    Parent = IProject,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type ClientResolver<
    R = IClient | null,
    Parent = IProject,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type UserResolver<
    R = string,
    Parent = IProject,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type ExpensesResolver<
    R = IExpenseAndIncome[] | null,
    Parent = IProject,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type IncomesResolver<
    R = IExpenseAndIncome[] | null,
    Parent = IProject,
    Context = {}
  > = Resolver<R, Parent, Context>;
}

export namespace ClientResolvers {
  export interface Resolvers<Context = {}, TypeParent = IClient> {
    id?: IdResolver<string, TypeParent, Context>;

    firstName?: FirstNameResolver<string | null, TypeParent, Context>;

    lastName?: LastNameResolver<string | null, TypeParent, Context>;

    email?: EmailResolver<string | null, TypeParent, Context>;

    phone?: PhoneResolver<string | null, TypeParent, Context>;

    postalCode?: PostalCodeResolver<string | null, TypeParent, Context>;

    address?: AddressResolver<string | null, TypeParent, Context>;

    user?: UserResolver<string | null, TypeParent, Context>;

    projects?: ProjectsResolver<string[] | null, TypeParent, Context>;
  }

  export type IdResolver<R = string, Parent = IClient, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >;
  export type FirstNameResolver<
    R = string | null,
    Parent = IClient,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type LastNameResolver<
    R = string | null,
    Parent = IClient,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type EmailResolver<
    R = string | null,
    Parent = IClient,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type PhoneResolver<
    R = string | null,
    Parent = IClient,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type PostalCodeResolver<
    R = string | null,
    Parent = IClient,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type AddressResolver<
    R = string | null,
    Parent = IClient,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type UserResolver<
    R = string | null,
    Parent = IClient,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type ProjectsResolver<
    R = string[] | null,
    Parent = IClient,
    Context = {}
  > = Resolver<R, Parent, Context>;
}

export namespace ExpenseAndIncomeResolvers {
  export interface Resolvers<Context = {}, TypeParent = IExpenseAndIncome> {
    name?: NameResolver<string | null, TypeParent, Context>;

    price?: PriceResolver<string | null, TypeParent, Context>;

    quantity?: QuantityResolver<number | null, TypeParent, Context>;

    taxRate?: TaxRateResolver<number | null, TypeParent, Context>;
  }

  export type NameResolver<
    R = string | null,
    Parent = IExpenseAndIncome,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type PriceResolver<
    R = string | null,
    Parent = IExpenseAndIncome,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type QuantityResolver<
    R = number | null,
    Parent = IExpenseAndIncome,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type TaxRateResolver<
    R = number | null,
    Parent = IExpenseAndIncome,
    Context = {}
  > = Resolver<R, Parent, Context>;
}

export namespace ExpenseResolvers {
  export interface Resolvers<Context = {}, TypeParent = IExpense> {
    name?: NameResolver<string | null, TypeParent, Context>;

    price?: PriceResolver<string | null, TypeParent, Context>;

    quantity?: QuantityResolver<number | null, TypeParent, Context>;

    taxRate?: TaxRateResolver<number | null, TypeParent, Context>;

    date?: DateResolver<string | null, TypeParent, Context>;
  }

  export type NameResolver<
    R = string | null,
    Parent = IExpense,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type PriceResolver<
    R = string | null,
    Parent = IExpense,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type QuantityResolver<
    R = number | null,
    Parent = IExpense,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type TaxRateResolver<
    R = number | null,
    Parent = IExpense,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type DateResolver<
    R = string | null,
    Parent = IExpense,
    Context = {}
  > = Resolver<R, Parent, Context>;
}

export namespace MutationResolvers {
  export interface Resolvers<Context = {}, TypeParent = {}> {
    registerUser?: RegisterUserResolver<IRegisterResponse, TypeParent, Context>;

    loginUser?: LoginUserResolver<IRegisterResponse, TypeParent, Context>;

    updateProject?: UpdateProjectResolver<
      IMutationProjectResponse,
      TypeParent,
      Context
    >;

    addProject?: AddProjectResolver<
      IMutationProjectResponse | null,
      TypeParent,
      Context
    >;

    deleteProject?: DeleteProjectResolver<
      IMutationProjectResponse | null,
      TypeParent,
      Context
    >;
  }

  export type RegisterUserResolver<
    R = IRegisterResponse,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, RegisterUserArgs>;
  export interface RegisterUserArgs {
    firstName: string;

    lastName: string;

    email: string;

    password: string;
  }

  export type LoginUserResolver<
    R = IRegisterResponse,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, LoginUserArgs>;
  export interface LoginUserArgs {
    email: string;

    password: string;
  }

  export type UpdateProjectResolver<
    R = IMutationProjectResponse,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, UpdateProjectArgs>;
  export interface UpdateProjectArgs {
    projectId: string;

    data: IProjectInput;
  }

  export type AddProjectResolver<
    R = IMutationProjectResponse | null,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, AddProjectArgs>;
  export interface AddProjectArgs {
    data: IProjectInput;
  }

  export type DeleteProjectResolver<
    R = IMutationProjectResponse | null,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, DeleteProjectArgs>;
  export interface DeleteProjectArgs {
    projectId: string;
  }
}

export namespace RegisterResponseResolvers {
  export interface Resolvers<Context = {}, TypeParent = IRegisterResponse> {
    success?: SuccessResolver<boolean, TypeParent, Context>;

    message?: MessageResolver<string | null, TypeParent, Context>;

    token?: TokenResolver<string, TypeParent, Context>;
  }

  export type SuccessResolver<
    R = boolean,
    Parent = IRegisterResponse,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type MessageResolver<
    R = string | null,
    Parent = IRegisterResponse,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type TokenResolver<
    R = string,
    Parent = IRegisterResponse,
    Context = {}
  > = Resolver<R, Parent, Context>;
}

export namespace MutationProjectResponseResolvers {
  export interface Resolvers<
    Context = {},
    TypeParent = IMutationProjectResponse
  > {
    success?: SuccessResolver<boolean, TypeParent, Context>;

    message?: MessageResolver<string | null, TypeParent, Context>;

    project?: ProjectResolver<IProject | null, TypeParent, Context>;
  }

  export type SuccessResolver<
    R = boolean,
    Parent = IMutationProjectResponse,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type MessageResolver<
    R = string | null,
    Parent = IMutationProjectResponse,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type ProjectResolver<
    R = IProject | null,
    Parent = IMutationProjectResponse,
    Context = {}
  > = Resolver<R, Parent, Context>;
}

/** Directs the executor to skip this field or fragment when the `if` argument is true. */
export type SkipDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  SkipDirectiveArgs,
  {}
>;
export interface SkipDirectiveArgs {
  /** Skipped when true. */
  if: boolean;
}

/** Directs the executor to include this field or fragment only when the `if` argument is true. */
export type IncludeDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  IncludeDirectiveArgs,
  {}
>;
export interface IncludeDirectiveArgs {
  /** Included when true. */
  if: boolean;
}

/** Marks an element of a GraphQL schema as no longer supported. */
export type DeprecatedDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  DeprecatedDirectiveArgs,
  {}
>;
export interface DeprecatedDirectiveArgs {
  /** Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax (as specified by [CommonMark](https://commonmark.org/). */
  reason?: string | null;
}

export interface DateScalarConfig extends GraphQLScalarTypeConfig<Date, any> {
  name: "Date";
}
