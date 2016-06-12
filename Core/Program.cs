using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Core
{
    public class Program
    {
        static readonly Mutex singleInstanceMutex = new Mutex(true, "{ce0415be-eec2-42cb-bb17-3880031714d9}");

        public static void Main(string[] args)
        {
            if (singleInstanceMutex.WaitOne(TimeSpan.Zero))
            {
                Initialize();
                singleInstanceMutex.ReleaseMutex();
            }
            else
            {
                Console.WriteLine("Application already started.");
            }
        }

        private static void Initialize()
        {
            var app = new Application();
            var appThread = new Thread(app.Run);

            appThread.Start();
            appThread.Join();
        }
    }
}
