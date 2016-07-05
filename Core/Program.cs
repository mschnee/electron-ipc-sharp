using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Core
{
    public class Program
    {
        // this is window only :()
        //static readonly Mutex singleInstanceMutex = new Mutex(true, "{ce0415be-eec2-42cb-bb17-3880031714d9}");

        public static void Main(string[] args)
        {
            // if (singleInstanceMutex.WaitOne(TimeSpan.Zero))
            // {
                
            //     singleInstanceMutex.ReleaseMutex();
            // }
            // else
            // {
            //     Console.WriteLine("Application already started.");
            // }
            // write a lock file to determine if this is a single-application
            Initialize();
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
