import { User } from "../../models/user/entities/user.entity";
export declare const createSubscription: ({ userProfile: { name, id } }: {
    userProfile: {
        name: any;
        id: any;
    };
}) => Promise<User>;
export declare const deleteSubscription: (id: string) => Promise<import("typeorm").DeleteResult>;
export declare const getSubscriptions: (config?: any) => Promise<User[]>;
