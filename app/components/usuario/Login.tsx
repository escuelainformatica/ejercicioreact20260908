import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "~/components/ui/card";
import { Button } from "../ui/button";
export default function Login() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-muted/40 p-4">

            <Card className="w-full sm:max-w-md">
                <CardHeader>
                    <CardTitle>Login</CardTitle>
                    <CardDescription>Enter your credentials to log in.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" required />
                        </div>
                    </form>
                </CardContent>
                <CardFooter>
                    <CardAction>
                        <Button type="button">Login</Button>
                    </CardAction>
                </CardFooter>
            </Card>
        </div>
    );
}
